.. _formulary:

********************************
Formulary (`plasmapy.formulary`)
********************************

.. currentmodule:: plasmapy.formulary

`plasmapy.formulary` provides theoretical formulas for calculation of
physical quantities helpful for plasma physics.

.. toctree::
   :maxdepth: 1
   :hidden:

   Classical Transport <braginskii>
   Collisions <collisions>
   Dielectrics <dielectric>
   Dimensionless <dimensionless>
   Dispersion Relations <dispersionfunction>
   Distribution Functions <distribution>
   Drifts <drifts>
   Ionization <ionization>
   Magnetostatics <magnetostatics>
   Mathematics <mathematics>
   Plasma Parameters <parameters>
   Quantum Relations <quantum>
   Relativistic Relations <relativity>

.. table::
   :widths: 5 16

   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Classical Transport <./braginskii>`          | `plasmapy.formulary.braginskii`         |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Collisions <./collisions>`                   | `plasmapy.formulary.collisions`         |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Dielectrics <./dielectric>`                  | `plasmapy.formulary.dielectric`         |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Dimensionless <./dimensionless>`             | `plasmapy.formulary.dimensionless`      |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Dispersion Relations <./dispersionfunction>` | `plasmapy.formulary.dispersionfunction` |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Distribution Functions <./distribution>`     | `plasmapy.formulary.distribution`       |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Drifts <./drifts>`                           | `plasmapy.formulary.drifts`             |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Ionization <./ionization>`                   | `plasmapy.formulary.ionization`         |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Magnetostatics <./magnetostatics>`           | `plasmapy.formulary.magnetostatics`     |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Mathematics <./mathematics>`                 | `plasmapy.formulary.mathematics`        |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Plasma Parameters <./parameters>`            | `plasmapy.formulary.parameters`         |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Quantum Relations <./quantum>`               | `plasmapy.formulary.quantum`            |
   +----------------------------------------------------+-----------------------------------------+
   | :doc:`Relativistic Relations <./relativity>`       | `plasmapy.formulary.relativity`         |
   +----------------------------------------------------+-----------------------------------------+

The subpackage makes heavy use of `astropy.units.Quantity` for handling
conversions between different unit systems. This is especially important
for electron-volts, commonly used in plasma physics to denote
temperature, although it is technically a unit of energy.

Most functions expect `astropy.units.Quantity` as input, however some
will use the `~plasmapy.utils.decorators.validate_quantities` decorator
to automatically cast arguments to Quantities with appropriate units. If
that happens, you will be notified via an `astropy.units.UnitsWarning`.

Please note that well maintained physical constant data with units and
uncertainties can be found in `astropy.constants`.

For a general overview of how unit-based input works, take a look at the
following example:


Examples
========

.. nbgallery::

    /notebooks/physics

Notes for developers
====================

Values should be returned as an Astropy Quantity in SI units.

If a quantity has several names, then the function name should be the
one that provides the most physical insight into what the quantity
represents.  For example, 'gyrofrequency' indicates gyration, while
Larmor frequency indicates that this frequency is somehow related to a
human (or perhaps a cat?) named Larmor.  Similarly, using omega_ce as
a function name for this quantity will make the code less readable to
people who are unfamiliar with the notation or use a different symbol.

The docstrings for plasma parameter methods should describe the
physics associated with these quantities in ways that are
understandable to students who are taking their first course in plasma
physics while still being useful to experienced plasma physicists.
