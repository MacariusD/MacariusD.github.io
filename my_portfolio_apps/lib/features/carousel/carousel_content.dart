import 'package:flutter/material.dart';
import 'package:mda/features/carousel/carousel_content_descriptionholder.dart';
import 'package:mda/features/carousel/carousel_content_imageholder.dart';

class MyCarouselContent extends StatelessWidget {
  final String picname;
  final String title;
  final String description;

  const MyCarouselContent(
      {super.key,
      required this.picname,
      required this.title,
      required this.description});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      decoration: BoxDecoration(
        border: Border.all(color: Theme.of(context).colorScheme.primary),
      ),
      child: Center(
        child: Column(
          children: [
            Expanded(
              flex: 1,
              child: MyCarouselImageHolder(
                photoName: picname,
              ),
            ),
            Expanded(
              flex: 2,
              child: MyCarouselDescHolder(
                title: title,
                description: description,
              ),
            )
          ],
        ),
      ),
    );
  }
}
