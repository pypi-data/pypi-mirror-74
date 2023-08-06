==========================
byot: build your own tests
==========================

This project provides a central place for utilities common to many use cases
so we don't have to re-implement them for multiple projects.

It builds on techniques used for many years in lp:bzr, lp:testtools,
lp:subunit, lp:selenium-simple-test, lp:u1-test-utils and of course python
unittest itself.

It focuses on providing building blocks for developers to build their own
test frameworks.

Test Loaders
============

The provided test loader standardizes on test IDs and addresses current and
known issues with unittest discover.

It can be used to load arbitrary tests from an arbitrary tree, relying on
simple hooks defined in python packages.

Examples include lp:selenium-simple-test scripts, shell scripts as well as
python tests organized in unusual ways. It also allows mixing different
kinds of tests in the same tree.

The emphasis is on allowing the user to fully customize test loading.


Test suites
===========

There are times where a test suite needs a specific setup. The
suites.TestSuite class implements setUp()/addCleanup() with semantics
similar to the sibling functions in unittest.TestCase.

This should be used while loading the tests and relies on existing API for
the test result classes.


Test selection
==============

While a test suite is most commonly run in full, there are times when only a
subset of a suite needs to run:
 * a developer may want to focus on a very reduced set when fixing a bug or
   developing a new feature.
 * a CI engine may want to run only hardware specific tests or any specific
   configuration (network, file systems, OS).

Using regular expressions to select or exclude tests has been addressing all
these needs in a surprisingly easy way.

Test runners
============

See test results ;)

Test runners generally mix test loading, test selection and test results
production.

byot aim is not to provide a one-size fits all test runner but instead
allow people to use their preferred one or define their own by offering
customizable test loaders, test filters and test results.

''byot-run'' is a simple test runner that demonstrates how to use the
various pieces. It may or may not address your needs ;)

Test Results
============

Test results are the output interface of test runners.

The most common use is to display the IDs executed and their timings as well
as arun summary. It is good enough for interactive use or to provide
feedback during remote execution.

subunit is used when collecting test execution related data is needed (most
importantly failures), this project focuses on *testing* the integration
with subunit but also expose

Test fixtures
=============

A common pattern in implementing TestCases is to add fixtures in the base
class so they are accessible to all tests. This pollutes the base classes
with methods or attributes not used by most of the tests.

Fixtures are better used via composition. But requiring an additional
'.fixtures.feature_x.attribute_y' make them harder to use.

We use a middle ground here by just using a simpler (and a bit surprising at
first) syntax and using python's ability to handle arbitrary attributes::

  def setUp(self):
      super().setUp()
      fixtures.set_uniq_cwd(self)
  
rather than::

  def setUp(self):
      super().setUp()
      self.useFixture(uniq_cwd)
      
Apart from that modest invasise use of test objects namespace, the only
constraint is that the test object supports the 'addCleanup' and the most
usual assertX methods. Since 'addCleanup' is provided by unittest.TestCase
itself, this is a light constraint, most python test frameworks inheriting
from it.

The benefit is that these fixtures can be used on any TestCase class without
requiring inheritance which can then be used for other needs without
interferences.
