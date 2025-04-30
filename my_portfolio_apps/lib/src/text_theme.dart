import 'package:flutter/material.dart';
import 'package:mda/src/material_theme_gen.dart';

final lightTextTheme = TextTheme(
  headlineLarge: TextStyle(
    fontFamily: 'Outfit',
    fontSize: 30,
    color: lightColorScheme.primary,
  ),
  headlineSmall: TextStyle(
    fontFamily: 'Outfit',
    fontSize: 20,
    color: lightColorScheme.secondary,
  ),
  titleLarge: TextStyle(
    fontFamily: 'Outfit',
    fontSize: 18,
    color: lightColorScheme.secondary,
  ),
  bodyLarge: TextStyle(
    fontFamily: 'Outfit',
    fontSize: 14,
    color: lightColorScheme.secondary,
  ),
);

final darkTextTheme = TextTheme(
  headlineLarge: TextStyle(
    fontFamily: 'Outfit',
    fontSize: 30,
    color: darkColorScheme.primary,
  ),
  headlineSmall: TextStyle(
    fontFamily: 'Outfit',
    fontSize: 20,
    color: darkColorScheme.secondary,
  ),
  titleLarge: TextStyle(
    fontFamily: 'Outfit',
    fontSize: 18,
    color: darkColorScheme.secondary,
  ),
  bodyLarge: TextStyle(
    fontFamily: 'Outfit',
    fontSize: 14,
    color: darkColorScheme.secondary,
  ),
);
