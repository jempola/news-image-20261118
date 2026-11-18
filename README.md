# news-image-20261118

One image that sums up the world news of **Wednesday, 18 November 2026** —
a front page drawn with vector shapes and text (PIL, no network, no external
images).

- **Lead:** the US destroys five Iranian oil tankers overnight; Iran hits
  back at ships near the Strait of Hormuz and at US forces in Jordan.
- **Space:** NASA's Voyager 1 becomes the first human-made object one
  light-day from Earth.
- **Europe:** the supermarket freezer hack spreads to 11 countries.
- **Earth:** a magnitude 5.3 earthquake shakes Romania.

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
to the output directory. Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Entry for the make.fun competition `news-image-20261118` ($250, top 50 paid).
