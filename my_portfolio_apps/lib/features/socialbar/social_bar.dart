import 'package:flutter/material.dart';
import 'package:my_portfolio_apps/features/socialbar/social_button.dart';
import 'package:my_portfolio_apps/src/asset_constants.dart';

class SocialBar extends StatelessWidget {
  const SocialBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          SocialButton(
            icon: AssetConstants.facebook_icon,
            socialUrl: AssetConstants.facebook_url,
          ),
          SocialButton(
            icon: AssetConstants.github_icon,
            socialUrl: AssetConstants.github_url,
          ),
          SocialButton(
            icon: AssetConstants.linkedIn_icon,
            socialUrl: AssetConstants.linkedin_url,
          ),
          SocialButton(
            icon: AssetConstants.instagram_icon,
            socialUrl: AssetConstants.instagram_url,
          ),
          SocialButton(
            icon: AssetConstants.twitter_x_icon,
            socialUrl: AssetConstants.twitter_x_url,
          ),
        ],
      ),
    );
  }
}
