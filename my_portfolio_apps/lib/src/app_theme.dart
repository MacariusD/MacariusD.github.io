import 'package:flutter/material.dart';
import 'package:my_portfolio_apps/src/material_theme_gen.dart';
import 'package:my_portfolio_apps/home.dart';
import 'package:my_portfolio_apps/src/text_theme.dart';

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // title: 'M.D.A. Portfolio App',
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: lightColorScheme,
        textTheme: lightTextTheme,
      ),
      darkTheme: ThemeData(
        useMaterial3: true,
        colorScheme: darkColorScheme,
        textTheme: darkTextTheme,
      ),
      themeMode: ThemeMode.dark,
      debugShowCheckedModeBanner: true,
      home: const MdaHome(),
    );
  }
}
