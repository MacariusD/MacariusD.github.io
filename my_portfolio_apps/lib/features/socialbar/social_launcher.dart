import "dart:io";
import "package:android_intent_plus/android_intent.dart";
import "package:flutter/foundation.dart";
import "package:url_launcher/url_launcher.dart";

@override
Future<void> slaunchUrl(String url) async {
  final _canLaunch = await canLaunchUrl(Uri.parse(url));
  if (kIsWeb) {
    if (_canLaunch) {
      await launchUrl(Uri.parse(url));
    } else {
      throw "Could not launch $url";
    }
    return;
  }
  if (Platform.isAndroid) {
    if (url.startsWith("https://www.facebook.com/")) {
      final url2 = "fb://facewebmodal/f?href=$url";
      final intent2 = AndroidIntent(action: "action_view", data: url2);
      final canWork = await intent2.canResolveActivity();
      if (canWork != null) {
        if (canWork) return intent2.launch();
      } else {
        debugPrint('canWork is null');
      }
    }
    final intent = AndroidIntent(action: "action_view", data: url);
    return intent.launch();
  } else {
    if (_canLaunch) {
      await launchUrl(Uri.parse(url));
    } else {
      throw "Could not launch $url";
    }
  }
}
