import 'package:flutter/material.dart';

class CurrentJobButton extends StatelessWidget {
  const CurrentJobButton({super.key});

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () {},
      child: Text(
        'Freelance Software Engineer',
        style: Theme.of(context).textTheme.headlineSmall,
      ),
    );
  }
}
