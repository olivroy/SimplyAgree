SimplyAgree R Package
================

[![Build
Status](https://travis-ci.com/arcaldwell49/SimplyAgree.svg?branch=master)](https://travis-ci.com/arcaldwell49/SimplyAgree)

**This Package is still in development and unit tests have not been
created yet. USE WITH CAUTION**

This is a R package for calculating absolute agreement and estimating
the required sample size for a study attempting to estimate absolute
agreement.

The functions in this package are largely based on the following works:

Lin L (1989). A concordance correlation coefficient to evaluate
reproducibility. *Biometrics* 45: 255 - 268.
<https://doi.org/10.2307/2532051>

Shieh, G. (2019). Assessing agreement between two methods of
quantitative measurements: Exact test procedure and sample size
calculation. *Statistics in Biopharmaceutical Research*, 1-8.
<https://doi.org/10.1080/19466315.2019.1677495>

## Installing SimplyAgree

You can install the most up-to-date version of `SimplyAgree` from
[GitHub](https://github.com/arcaldwell49/SimplyAgree) with:

``` r
devtools::install_github("arcaldwell49/SimplyAgree")
```

## Using SimplyAgree

As the title of the package indicates, this package attempts to make
assessing agreement simple.

First, let us start with `pwr_agree` which performs a power analysis for
absolute agreement. This function is based off the work of Shieh (2019).
In total there are 7 parameters to be defined for this function.

`prop0`: The ‘null central proportion’, or the proportion of data that
should lie within the threshold of agreement. The default is .8 or 80%

`delta`: The threshold below which methods agree/can be considered
equivalent.

`power`: Nominal power, the probability of rejecting the null-hypothesis
when the alternative hypothesis, the specified null proportion of the
data lies between the thresholds, is true.

`mu`: Mean difference between methods, based on previous research or
pilot work.

`sigma`: SD of difference, based on previous research or pilot work.
This SD can be determind from the limits of agreement.

`alpha`: Desired Type 1 error rate. Probability of concluding the
methods agree, the specified proportion of data falls between the
tresholds, while they actually not agree. Default is .05

`verbose`: Option to print a summary of results to the console.

For the example below, let us assume we want to have 80% power to have
80% of the differences to be 2.7 (delta) when there is a 0.05 mean
difference between methods and the standard deviation is 1.04.

``` r
power_test = pwr_agree(
  prop0 = 0.9,
  delta = 2.7,
  power = 0.8,
  mu = 0.05,
  sigma = 1.04,
  alpha = 0.05,
  verbose = TRUE
)
```

    ## [1] "gam, power, n"
    ## [1]  8.9006  0.8106 18.0000

The results show the test statistic (`gam` = gamma), the power (81.06%),
and the sample size required to achieve that power (n = 18). Note thate
`verbose = TRUE` this means that a summary of the results is
automatically printed to the console.

Now, let’s move onto the `agree_test` function. This is also quite
simple, but first I need to generate some data to analyze.

``` r
set.seed(20200310)
x1 = rnorm(30,0,15)
y1 = x1 + rnorm(30,.07,5)
df1 = data.frame(x1,y1)
```

We can now perform an agreement analysis between x1 and y1.

`x`: Criterion measurement, or first measurement if repeated measures

`y` : Other measurement, or second measurement if repeated measures

`prop0`: The ‘null central proportion’, or the proportion of data that
should lie within the threshold of agreement. The default is .8 or 80%

`delta`: The treshold below which methods agree/can be considered
equivalent, can be in any units. Equivalence Bound for Agreement.

`alpha`: Set the desired Type I error rate; default is .05

`verbose` : Option to print a summary of results to the console.

Now we can run this analysis.

``` r
agreed = agree_test(
  x = df1$x1,
  y = df1$y1,
  prop0 = .8,
  delta = 7,
  alpha = .05,
  verbose = TRUE
)
```

    ## Null Central Proportion = 0.8
    ## alpha = 0.05 | 95 % Confidence Interval
    ## ### TOST Results ###
    ## Exact C.I.: [-7.8459, 8.0238]
    ## test: don't reject h0
    ## ### Concordance Correlation Coefficient (CCC) ###
    ## CCC: 0.9313, 95% C.I. [0.8628, 0.9662]

Overall, the results indicate that we have very good agreement between
x1 & y1.

We can also see visualizations produced by agree\_test

First, an “line-of-identity” plot.

``` r
agreed$identity.plot
```

![](README_files/figure-gfm/unnamed-chunk-2-1.png)<!-- -->

Second, a classic Bland-Altman plot.

``` r
agreed$bland_alt.plot
```

![](README_files/figure-gfm/unnamed-chunk-3-1.png)<!-- -->
