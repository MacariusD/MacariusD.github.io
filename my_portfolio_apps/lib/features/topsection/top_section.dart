import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:my_portfolio_apps/features/topsection/currentjob_button.dart';

import 'mdev_button.dart';
import 'name_button.dart';

class TopSection extends StatelessWidget {
  const TopSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Gap(20),
        MDEV2Button(),
        Gap(10),
        NameButton(),
        CurrentJobButton(),
      ],
    );
  }
}
