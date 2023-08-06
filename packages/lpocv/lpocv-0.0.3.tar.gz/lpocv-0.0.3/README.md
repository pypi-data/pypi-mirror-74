#lpocv: Leave-pair-out cross validation
# LPOCV: Leave-pair-out cross validation
A Python module that implements leave-pair-out cross-validation to obtain a more accurate estimate of model performance in machine learning classification and regression problems. It does so by allowing the user to match the samples by a confounding batch variable and including errors on the labels (for regression problems).

### Requirements
Requires `scikit_learn` and `numpy`
### Installation
Use the package manager `pip` to  install the `lpocv`
```
pip install lpocv
```
### Usage
<ol>
  <li> <img source="https://render.githubusercontent.com/render/math?math={\mathcal{O}(N)}">  pairs:
  The number of cross-validations using leave-pair-out method is <img src="https://render.githubusercontent.com/render/math?math={^{N}C_{2} = \frac{N(N-1)}{2} = \mathcal{O}(N^2)}">, for large <em>N</em> this can become computationally expensive. In such cases <code>orderN=True</code> can be used so that every sample gets <em>randomly</em> paired with exactly one other sample giving <img src="https://render.githubusercontent.com/render/math?math=\mathcal{O}(N)"> pairs.
  </li>
<pre><code>from sklearn.datasets import make_classification, make_regression
from lpocv.lpocv import LeavePairOut
X, y = make_classification(n_samples=20)
for train, test in LeavePairOut().split(X, y, orderN=True):
  print (y[test])
</code></pre>

  <li> Error in labels:
  In regression problems the error on the prediction labels is often known and should be taken in to consideration when choosing test pairs. The test pairs whose prediction labels are within the error limit should not be included when evaluating the model performance. LPOCV allows to specify a variable  <code>erry</code> which includes only those test pairs for which  <code>|y[i]-y[j]| > max(erry[i],erry[j])</code>. The parameter <code>erry</code> can be a single value which represents the error in all the labels or can be specified in array-like fashion.
  </li>
<pre><code>from numpy.random import uniform
X, y = make_regression(n_samples=20)
erry = uniform(0, 0.5*max(y), len(y))
for train, test in LeavePairOut().split(X, y, erry, num_pairs=1):
  print (y[test], erry[test])
</code></pre>

  <li> Batch effects:
  In many cases prediction labels are confounded by known batch effects, LPOCV allows for a more accurate model evaluation by including only those test pairs for which the samples belong to the same batch. The value of the batch parameter is specified using the variable <code>groups</code>, the boolean <code>match_groups</code> should be set  <code>True</code>.
  <h6>Note:</h6><code>groups</code> can be of type string or float, if <code>groups</code> is float then a <code>match_window</code> should be specified, if <code>|groups[i]-groups[j]| < match_window</code> then the samples <code>i</code> and <code>j</code> are considered to belong to the same batch.
  </li>

<pre><code>from numpy.random import randint
X, y = make_classification(n_samples=20)
groups = randint(0, 2, len(y))
for train, test in LeavePairOut().split(X, y,
                                  groups=groups, match_groups=True,
                                  num_pair=1):
  print(y[test], groups[test])
</code></pre>
<ol>
