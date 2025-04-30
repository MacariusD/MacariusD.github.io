import 'package:flutter/material.dart';
import 'package:my_portfolio_apps/features/socialbar/social_launcher.dart';

class SocialButton extends StatelessWidget {
  final String icon;
  final String socialUrl;
  const SocialButton({super.key, required this.icon, required this.socialUrl});

  @override
  Widget build(BuildContext context) {
    return Ink(
      width: 40,
      height: 40,
      decoration: BoxDecoration(
        image: DecorationImage(image: AssetImage(icon), fit: BoxFit.fitHeight),
      ),
      child: InkWell(
        onTap: () {
          slaunchUrl(socialUrl);
        },
      ),
    );
  }
}
