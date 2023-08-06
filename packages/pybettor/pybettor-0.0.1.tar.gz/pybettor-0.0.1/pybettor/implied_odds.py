# -*- coding: utf-8 -*-
# 
# title: Probability of Event Conversion to Odds
# description: This function provides the fair odds for a given event probability
# parameters:
#   prob: probability of event
#   category: type of odds
#        'all', All types
#        'us', American Odds
#        'dec', Decimal Odds
#        'frac', Fractional Odds
# return odds fair odds of a given event
# 
# examples
# implied_odds([0.75, 0.2, 0.7], category='us')
# implied_odds([0.75, 0.2, 0.7], category='dec')
# implied_odds([0.75, 0.2, 0.7], category='frac')
# implied_odds([0.75, 0.2, 0.7], category='all')
# 


import sys
from fractions import Fraction
import pandas as pd

def implied_odds(prob, category = "us"):
    
    
    if type(prob) is not list:
        prob = [prob]
    
    # Error Handling
    if not all(isinstance(x, float) for x in prob):
        sys.exit("probability must be numeric")
        
    if any(x < 0 or x>  1 for x in prob):
        sys.exit("probability must be between 0 and 1")
        
    if category not in ['all', 'us', 'frac', 'dec']:
        sys.exit("type must be either: ('all', us', 'dec', 'frac')")
    
    
    
    if category == 'all':

        us = [x / (1 - x) * -100 if x > 0.5 else (1 - x) / x * 100 for x in prob]
        dec = [round(1 / x, 2) for x in prob]
        frac = [Fraction(x - 1).limit_denominator(100) for x in dec]
        frac = [str(x.numerator) + '/' + str(x.denominator) for x in frac]
        prob = prob
        imp_odds = pd.DataFrame({'American' : us,
                                 'Decimal' : dec,
                                 'Fraction' : frac,
                                 'Implied Probability' : prob})
    
    elif category == 'us':
        imp_odds = [x / (1 - x) * -100 if x > 0.5 else (1 - x) / x * 100 for x in prob]
        imp_odds = [round(x) for x in imp_odds]
    
    elif category == 'dec':
        imp_odds = [round(1 / x, 2) for x in prob]
    
    elif category == 'frac':
        imp_odds = [Fraction((1.0/ x) - 1.0).limit_denominator(100)for x in prob]
        imp_odds = [str(x.numerator) + '/' + str(x.denominator) for x in imp_odds]

            
    
    return imp_odds