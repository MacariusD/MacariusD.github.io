import 'package:flutter/material.dart';

class NameButton extends StatelessWidget {
  const NameButton({super.key});

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () {},
      child: Text(
        'Macarius D. Auguste',
        style: Theme.of(context).textTheme.headlineLarge,
      ),
    );
  }
}
