import 'package:flutter/material.dart';
import 'package:flutter_native_splash/flutter_native_splash.dart';
import 'package:my_portfolio_apps/features/socialbar/social_bar.dart';
import 'package:my_portfolio_apps/features/topsection/top_section.dart';
import 'package:my_portfolio_apps/features/carousel/hero_carousel.dart';

class MdaHome extends StatefulWidget {
  const MdaHome({super.key});

  @override
  State<MdaHome> createState() => _MdaHome();
}

class _MdaHome extends State<MdaHome> {
  void initState() {
    super.initState();
    initialization();
  }

  void initialization() async {
    // This is where you can initialize the resources needed by your app while
    // the splash screen is displayed.  Remove the following example because
    // delaying the user experience is a bad design practice!
    // ignore_for_file: avoid_print);

    await Future.delayed(const Duration(seconds: 1));
    debugPrint('ready in 1...');
    await Future.delayed(const Duration(seconds: 1));
    debugPrint('go!');
    FlutterNativeSplash.remove();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        padding: EdgeInsets.all(30),
        child: Center(
          child: Column(
            children: [
              TopSection(),
              Expanded(child: MyCarousel()),
              SocialBar(),
            ],
          ),
        ),
      ),
    );
  }
}
