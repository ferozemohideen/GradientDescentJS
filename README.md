# GradientDescentJS
Gradient Descent JS offers short interactive demos of two methods in statistical learning used to estimate the unknown parameters of a model: Ordinary Least Squares and Gradient Descent. In both examples, the sample space is in 2D, although the principles behind both can be (and are often) extended to higher dimensions. In this case, however, the equation of a linear model can be given simply by `y = mx + b`, where `m` and `b` are the unknown parameters to be estimated.

### Ordinary Least Squares (OLS)
The OLS method involves measuring loss, or an estimate of a model's 'badness', as the sum of the squared differences between the model's predicted values and the actual values of a dataset. The most accurate model is found by choosing the coefficients for which this loss function is at an absolute minimum. In the case of a linear model in two dimensions, the coefficients required to achieve that minimum can be found using a formula derived by calculus; for convenience sake, this formula is omitted from the description but can be readily found online. The OLS example uses this formula and the user-provided datapoints to generate and draw the resulting linear model.

### Gradient Descent (GD)
The gradient descent method is more commonly used in statistical learning, especially in regards to training a model to fit high dimensional data. Similar to OLS, there involves a loss function L that gives a quantitative measure of the 'badness' of a model W, which one seeks to minimize. Instead of finding the coefficients (or weights) W using a formula, however, GD works by iteratively making 'steps' in the right direction to the minimum of the loss function L. This 'step' is chosen by following the opposite of the <i>gradient</i> dL/dW, which from calculus is a vector in the direction of the greatest positive change. By choosing to step as such, the algorithm chooses new coefficients that move toward the minimum of the loss function. More technical details, including the reasoning behind choosing a suitable <i>learning rate</i> can be found in the app.

#### Why?
I decided to complete this quick side project while watching a Stanford lecture series on image analysis using convolutional neural networks. One of the most important elements of tuning the parameters behind the weights W of the multiple layers in these networks is in fact gradient descent and calculating the gradient using backpropagation. This was also helpful in brushing up on my Javascript and using p5 as a visual graphing tool for the first time.

### TODO
- Add indicator windows showing the coefficients as they change in both models instead of just drawing the lines
- Make prettier
- Possibly add another dimension (3D)
