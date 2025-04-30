import 'package:flutter/material.dart';
import 'package:my_portfolio_apps/src/asset_constants.dart';

class MyCarouselImageHolder extends StatelessWidget {
  final String photoName;

  const MyCarouselImageHolder({super.key, required this.photoName});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(20),
      child: Image.asset(AssetConstants.carouselAssetsPath + photoName),
    );
  }
}
