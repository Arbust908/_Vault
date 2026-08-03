you can create a sticky navbar that morphs when you scroll with pure CSS, no JS or animation libraries required

𝚑𝚎𝚊𝚍𝚎𝚛 {
  𝚌𝚘𝚗𝚝𝚊𝚒𝚗𝚎𝚛-𝚝𝚢𝚙𝚎: 𝚜𝚌𝚛𝚘𝚕𝚕-𝚜𝚝𝚊𝚝𝚎;
  𝚙𝚘𝚜𝚒𝚝𝚒𝚘𝚗: 𝚜𝚝𝚒𝚌𝚔𝚢;
  𝚝𝚘𝚙: 𝟶;
}
@𝚌𝚘𝚗𝚝𝚊𝚒𝚗𝚎𝚛 𝚜𝚌𝚛𝚘𝚕𝚕-𝚜𝚝𝚊𝚝𝚎(𝚜𝚝𝚞𝚌𝚔: 𝚝𝚘𝚙) {
    .𝚗𝚊𝚟-𝚋𝚊𝚛 {
         𝚖𝚊𝚡-𝚠𝚒𝚍𝚝𝚑: 𝟻𝟼𝚛𝚎𝚖;
         𝚋𝚘𝚛𝚍𝚎𝚛-𝚛𝚊𝚍𝚒𝚞𝚜: 𝟶.𝟽𝟻𝚛𝚎𝚖;
         𝚋𝚊𝚌𝚔𝚐𝚛𝚘𝚞𝚗𝚍: 𝚛𝚐𝚋(𝟸𝟻𝟻 𝟸𝟻𝟻 𝟸𝟻𝟻 / 𝟶.𝟿𝟸);
     }
}

the browser now knows when a sticky element is stuck, all triggered by one container query

available only in chromium browsers only, no firefox or safari which is a shame

![https://x.com/mannupaaji/status/2060025609867387239/video/1](https://x.com/mannupaaji/status/2060025609867387239/video/1)