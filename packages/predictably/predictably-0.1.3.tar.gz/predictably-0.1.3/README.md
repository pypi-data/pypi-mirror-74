# predict-*ably*
A Python module for time-series forecasting that seeks to provide high-level functionality similar to R's fable and forecast packages

Where functionality already exists in Python the goal is to provide a consistent API wrapper that fits with scikit-learn and standard forecasting practice. 

To that extent, the project will leverage some of the code used in Alan-Turing Institute's sktime (https://github.com/alan-turing-institute/sktime). 

Plan to add hierarchical reconciliation along the lines of: 
1. https://github.com/carlomazzaferro/scikit-hts-examples (see: https://scikit-hts.readthedocs.io/en/latest/_modules/hts/model/ar.html#AutoArimaModel for docs)
2. https://github.com/CollinRooney12/htsprophet
