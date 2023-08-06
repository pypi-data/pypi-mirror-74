from __future__ import print_function


import numpy as np
import jinja2
import astropy.units as u

def format_text_exp(value):
    return "%.2lg" % value

def format_preliminary(value):
    return "\\textcolor{red}{"+str(value)+"}"

def format_wrt_t0(value):
    if value > 0:
        return "~+~%.2lg" % abs(value)
    return "~-~%.2lg" % abs(value)

def format_plusminus(value, ct=2, cte=1):
    if np.log10(value['mean']) > 3 or np.log10(value['mean']) < -2:
        value['scale_log10'] = int(np.log10(value['mean']))
        if value['scale_log10'] < 0:
            value['scale_log10'] -= 1

        for v in 'mean', 'stat_err', 'stat_err_plus', 'stat_err_minus':
            if v in value:
                value[v] = value[v]/10**value['scale_log10']

    if 'stat_err' in value:
        r = ("%%.%ilf~$\pm$~%%.%ilf" % (ct, cte)) % (
            value['mean'], value['stat_err'])
    else:
        r = ("%%.%ilf\\small$^{+%%.%ilf}_{-%%.%ilf}$\\normalsize" % (ct, cte, cte)) % (
            value['mean'], value['stat_err_plus'], value['stat_err_minus'])

    if 'scale_log10' in value:
        r += "$ \\times 10^{%i}$" % value['scale_log10']

    return r

def format_latex_exp(value, ineq=False, mant_precision=2):
    if value is None or str(value).strip() == "" or (isinstance(value, str) and value.strip() == ""):
        return "N/A"

    try:
        print("XX", value, "XX")
    except jinja2.exceptions.UndefinedError:
        return "N/A"

    try:
        value_exp = int(np.log10(value))
        if value_exp < 0:
            value_exp -= 1
        value_mant = value/10**value_exp
    except:
        raise

    if value_mant == 10:
        value_mant = 1
        value_exp += 1

    str_exp = "10$^{%.2g}$" % (value_exp)
    str_mant = ("%%.%ig" % mant_precision) % (value_mant)

    print("YYY::", value_mant, str_mant)

    if str_mant == "1":
        r = str_exp
    else:
        r = (str_mant+"$\\times$"+str_exp).strip()

    # r=("%.2g$\\times$10$^{%.2g}$"%(value_mant,value_exp)).strip()
    if ineq:
        r = r.replace("$", "")

    print(r)

    return r

def format_erange(value):
    if value['emax'] < 10000:
        return "%g~--~%g~keV" % (value['emin'], value['emax'])
    else:
        return "%g~keV~--~%g~MeV" % (value['emin'], value['emax']/1000)

def format_utc(value):
    return value.replace("T", " ")[:19]

def format_unit(entry, requested_unit):
    requested_unit = u.Unit(requested_unit)

    if isinstance(entry, dict):
        for key, value in entry.items():
            try:
                available_unit = u.Unit(key)
                return value * available_unit.to(requested_unit)
            except ValueError:
                continue
    elif isinstance(entry, u.Quantity):
        return entry.to(requested_unit).value


def setup_custom_filters(latex_jinja_env):
    latex_jinja_env.filters['wrt_t0'] = format_wrt_t0
    latex_jinja_env.filters['latex_exp'] = format_latex_exp
    latex_jinja_env.filters['text_exp'] = format_text_exp
    latex_jinja_env.filters['erange'] = format_erange
    latex_jinja_env.filters['plusminus'] = format_plusminus
    latex_jinja_env.filters['preliminary'] = format_preliminary
    latex_jinja_env.filters['format_utc'] = format_utc
    latex_jinja_env.filters['unit'] = format_unit
    latex_jinja_env.filters['u'] = format_unit
