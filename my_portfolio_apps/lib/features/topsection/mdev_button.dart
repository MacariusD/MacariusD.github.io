import 'package:flutter/material.dart';
import 'package:my_portfolio_apps/src/asset_constants.dart';

class MDEV2Button extends StatelessWidget {
  const MDEV2Button({super.key});

  @override
  Widget build(BuildContext context) {
    return Ink(
      width: double.infinity,
      height: 30,
      decoration: BoxDecoration(
        image: const DecorationImage(
          image: AssetImage(AssetConstants.MDEV2_logo_dark),
          fit: BoxFit.fitHeight,
        ),
      ),
      child: InkWell(onTap: () {}),
    );
  }
}
