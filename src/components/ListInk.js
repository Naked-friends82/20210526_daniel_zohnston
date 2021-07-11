import React from 'react';
import folder2 from '../image/folder2.png';
import ImgList from "../components/ImgList";

//2021
import one from "../drawings/Ink/2021/1.jpg";
import barber from "../drawings/Ink/2021/Barber.jpg";
import bread from "../drawings/Ink/2021/Bread.jpg";
import danielzohnston from "../drawings/Ink/2021/Danielzohnston.jpg";
import denture from "../drawings/Ink/2021/Denture.jpg";
import drawing_1 from "../drawings/Ink/2021/Drawing_1.jpg";
import drawing_2 from "../drawings/Ink/2021/Drawing_2.jpg";
import green from "../drawings/Ink/2021/Green.jpg";
import greet from "../drawings/Ink/2021/Greet.jpg";
import hand from "../drawings/Ink/2021/Hand.jpg";
import hands from "../drawings/Ink/2021/Hands.jpg";
import lostMyJob from "../drawings/Ink/2021/Lost_my_job.jpg";
import park from "../drawings/Ink/2021/Park.jpg";
import phone from "../drawings/Ink/2021/Phone.jpg";
import romance from "../drawings/Ink/2021/Romance.jpg";
import running from "../drawings/Ink/2021/Running.jpg";
import space from "../drawings/Ink/2021/Space.jpg";
import stillFriends from "../drawings/Ink/2021/Still_friends.jpg";
import stillLife from "../drawings/Ink/2021/Still_life.jpg";
import think from "../drawings/Ink/2021/Think.jpg";
import tomb from "../drawings/Ink/2021/Tomb.jpg";
import inkUntitled_1 from "../drawings/Ink/2021/untitled_1.jpg";
import inkUntitled_2 from "../drawings/Ink/2021/untitled_2.jpg";
import inkUntitled_3 from "../drawings/Ink/2021/untitled_3.jpg";
import inkUntitled_4 from "../drawings/Ink/2021/untitled_4.jpg";
import inkUntitled_5 from "../drawings/Ink/2021/untitled_5.jpg";
import inkUntitled_6 from "../drawings/Ink/2021/untitled_6.jpg";
import inkUntitled_7 from "../drawings/Ink/2021/untitled_7.jpg";
import inkUntitled_8 from "../drawings/Ink/2021/untitled_8.jpg";
import wall from "../drawings/Ink/2021/Wall.jpg";



const ListInk = ({currentImg, setCurrentImg, setWsh}) => {

  const LIST_ink_2021 = [
    {
      title: "1",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: one,
      wsh: "h",
    },
    {
      title: "Barber",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: barber,
      wsh: "h",
    },
    {
      title: "Bread",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: bread,
      wsh: "h",
    },
    {
      title: "Danielzohnston",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: danielzohnston,
      wsh: "h",
    },
    {
      title: "Denture",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: denture,
      wsh: "h",
    },
    {
      title: "Drawing_1",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: drawing_1,
      wsh: "h",
    },
    {
      title: "Drawing_2",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: drawing_2,
      wsh: "h",
    },
    {
      title: "Green",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: green,
      wsh: "h",
    },
    {
      title: "Greet",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: greet,
      wsh: "h",
    },
    {
      title: "Hand",
      caption: "ink on paper, 14 * 21 cm, 2021",
      src: hand,
      wsh: "w",
    },
    {
      title: "Hands",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: hands,
      wsh: "h",
    },
    {
      title: "Lost_my_job",
      caption: "ink on paper, 14 * 21 cm, 2021",
      src: lostMyJob,
      wsh: "w",
    },
    {
      title: "Park",
      caption: "ink on paper, 14 * 21 cm, 2021",
      src: park,
      wsh: "w",
    },
    {
      title: "Phone",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: phone,
      wsh: "h",
    },
    {
      title: "Romance",
      caption: "ink on paper, 14 * 21 cm, 2021",
      src: romance,
      wsh: "w",
    },
    {
      title: "Running",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: running,
      wsh: "h",
    },
    {
      title: "Space",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: space,
      wsh: "h",
    },
    {
      title: "Still_friends",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: stillFriends,
      wsh: "h",
    },
    {
      title: "Still_life",
      caption: "ink on paper, 14 * 21 cm, 2021",
      src: stillLife,
      wsh: "w",
    },
    {
      title: "Think",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: think,
      wsh: "h",
    },
    {
      title: "Tomb",
      caption: "ink on paper, 14 * 21 cm, 2021",
      src: tomb,
      wsh: "w",
    },
    {
      title: "untitled_1",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: inkUntitled_1,
      wsh: "h",
    },
    {
      title: "untitled_2",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: inkUntitled_2,
      wsh: "h",
    },
    {
      title: "untitled_3",
      caption: "ink on paper, 14 * 21 cm, 2021",
      src: inkUntitled_3,
      wsh: "w",
    },
    {
      title: "untitled_4",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: inkUntitled_4,
      wsh: "h",
    },
    {
      title: "untitled_5",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: inkUntitled_5,
      wsh: "h",
    },
    {
      title: "untitled_6",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: inkUntitled_6,
      wsh: "h",
    },
    {
      title: "untitled_7",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: inkUntitled_7,
      wsh: "h",
    },
    {
      title: "untitled_8",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: inkUntitled_8,
      wsh: "h",
    },
    {
      title: "Wall",
      caption: "ink on paper, 21 * 14 cm, 2021",
      src: wall,
      wsh: "h",
    },
  ];
  // const LIST_ink_2020 = [
  // ];
  // const LIST_ink_2019 = [
  // ];
return(
  <>
  <ul className="listBox">
    <img className="file2" src={folder2} alt="fav" />2021_Ink Drawing
    {LIST_ink_2021.map((each) => 
      <ImgList key={each.title} each={each} currentImg={currentImg} setCurrentImg={setCurrentImg} setWsh={setWsh} />
    )}
  </ul>
  </>
)
}

export default ListInk;