import 'dart:convert';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mda/features/carousel/carousel_content.dart';

class MyCarousel extends StatefulWidget {
  const MyCarousel({super.key});

  @override
  State<MyCarousel> createState() => _MyCarouselState();
}

class _MyCarouselState extends State<MyCarousel> {
  List jsonlist = [];

  Future<void> readJson() async {
    final String response =
        await rootBundle.loadString('assets/data/carousel_content.json');
    final data = await json.decode(response);
    // debugPrint(data.toString());
    setState(() {
      jsonlist = data["carousel_items"];
    });
  }

  @override
  void initState() {
    //implement initState
    this.readJson();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return CarouselSlider(
      options: CarouselOptions(
        // height: MediaQuery.of(context).size.height,
        aspectRatio: .8,
        enlargeCenterPage: true,
        initialPage: 7,
      ),
      items: jsonlist.map((singlePage) {
        return Builder(
          builder: (BuildContext context) {
            return MyCarouselContent(
              picname: singlePage["photo_name"],
              title: singlePage["title"],
              description: singlePage["description"],
            );
          },
        );
      }).toList(),
    );
  }
}
