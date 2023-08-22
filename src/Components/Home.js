import React, { useState } from 'react'
import '../CSS/Style.css'
import Chat from './Chat'
import Chats from './Chats';

function Home() {
  const chats = [
    {
      Electronics_Group: {
        active: true,
        chat1: {
          id: 1,
          title: 'HP Laptop',
          image: 'https://m.media-amazon.com/images/I/71WR9-JEFlL.jpg',
        },
        chat2: {
          id: 2,
          title: 'Samsung Smart TV',
          image: 'https://media.istockphoto.com/id/529869211/photo/samsung-smart-tv-and-social-media.jpg?s=612x612&w=0&k=20&c=gm07Pxn33dwvaa-YL6jOiiimHv4UMBpWp_r0gQ2gSs4=',
        },
        chat3: {
          id: 3,
          title: 'Apple Watch',
          image: 'https://theclubfactory.in/cdn/shop/products/Newlatest2022SmartWatchwithAlways-onAMOLEDDisplayAlexaBuilt-inSpO214DaysBatteryLife68SportsModesGPSHRSleep_StressMonitoring_2_800x.jpg?v=1651690188',
        },
      },
    },
    {
      Clothing_Group: {
        active: true,
        chat1: {
          id: 4,
          title: 'Men T-Shirt',
          image: 'https://www.teez.in/cdn/shop/products/Cisco-Logo-T-Shirt-For-Men-2_large.jpg?v=1586160953',
        },
        chat2: {
          id: 5,
          title: 'Men Shirt',
          image: 'https://img3.exportersindia.com/product_images/bc-full/2019/7/6447138/mens-shirts-1563255452-4999364.jpeg',
        },
      },
    },
    {
      Pharmacy_Group: {
        active: true,
        chat1: {
          id: 6,
          title: 'Strepsils',
          image: 'https://images.apollo247.in/pub/media/catalog/product/S/T/STR0591_1-AUG23_1.jpg',
        },
        chat2: {
          id: 7,
          title: 'Vicks',
          image: 'https://images.apollo247.in/pub/media/catalog/product/V/I/VIC0023_1-AUG23_1.jpg',
        },
        chat3: {
          id: 8,
          title: 'Inhaler',
          image: 'https://images.apollo247.in/pub/media/catalog/product/V/I/VIC0020_1-AUG23_1.jpg',
        },
        chat4: {
          id: 9,
          title: 'Zandu Bam',
          image: 'https://images.apollo247.in/pub/media/catalog/product/Z/A/ZAN0246_1-AUG23_1.jpg',
        },
      },
    },
    {
      GYM_Group: {
        active: false,
        chat1: {
          id: 10,
          title: 'Chat 1',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="marketplace',
        },
        chat2: {
          id: 11,
          title: 'Chat 2',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="marketplace',
        },
        chat3: {
          id: 12,
          title: 'Chat 3',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="marketplace',
        },
        chat4: {
          id: 13,
          title: 'Chat 4',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="marketplace',
        },
      },
    },
    {
      Toys_Group: {
        active: true,
        chat1: {
          id: 14,
          title: 'Dinosaur Doll',
          image: 'https://www.ikea.com/in/en/images/products/jaettelik-soft-toy-dinosaur-dinosaur-brontosaurus__0804796_pe769337_s5.jpg?f=s',
        },
        chat2: {
          id: 15,
          title: 'Remote Control Rikshaw',
          image: 'https://m.media-amazon.com/images/I/51uB7i1cw+L._AC_UF1000,1000_QL80_.jpg',
        },
        chat3: {
          id: 16,
          title: 'Teddy Bear',
          image: 'https://etimg.etb2bimg.com/photo/97555701.cms',
        },
        chat4: {
          id: 17,
          title: 'Robot',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaAINx8WWaQ1fOoA9HMHPCWQxy1zIHSjS6Q&usqp=CAU',
        },
      },
    },
    {
      Software_Group: {
        active: false,
        chat1: {
          id: 18,
          title: 'Chat 1',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="marketplace',
        },
        chat2: {
          id: 19,
          title: 'Chat 2',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="marketplace',
        },
        chat3: {
          id: 20,
          title: 'Chat 3',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="marketplace',
        },
        chat4: {
          id: 21,
          title: 'Chat 4',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="marketplace',
        },
      },
    },
    {
      Travel_Group: {
        active: true,
        chat1: {
          id: 22,
          title: 'Goa Package',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1',
        },
        chat2: {
          id: 23,
          title: 'Turkey Package',
          image: 'https://www.traveloffpath.com/wp-content/uploads/2022/11/Aerial-View-Of-Antalya-Marina-Mediterranean-Coast-Of-Turkey-1.jpg.webp',
        },
        chat3: {
          id: 3,
          title: 'Ahmedabad Package',
          image: 'https://i0.wp.com/www.opindia.com/wp-content/uploads/2021/02/Ahmedabad-630x381-1.jpg?fit=630%2C381&ssl=1',
        },
        chat4: {
          id: 4,
          title: 'London Package',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvZDPjpM2ZExfz6CkGegobd0Y_bDl4SxKwA&usqp=CAU',
        },
      },
    },
  ];
  const [selectedChat, setSelectedChat] = useState([]);
  const [title, setTitle] = useState();
  const [src, setSrc] = useState();
  const [formClass, setformClass] = useState('hidden');
  const [formClass2, setformClass2] = useState('');
  const [errorMessage, setErrorMessage] = useState('Click on a group to get started.');
  const handleChatClick = (chatGroupData) => {
    setformClass('hidden');
    setformClass2('');
    const chatGroupKey = Object.keys(chatGroupData)[0];
    const { active, ...chatsInSelectedGroup } = chatGroupData[chatGroupKey];
  
    if (!active) {
      setSelectedChat([]);
      setErrorMessage('Marketplace is inactive for this group.');
      return;
    }
    if (chatsInSelectedGroup) {
      setErrorMessage('');
      const selectedGroupChat = Object.values(chatsInSelectedGroup);
      setSelectedChat(selectedGroupChat);
    }
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  }
  const handleSrc = (event) => {
    setSrc(event.target.value);
  }

  const handleAdd = () => {
    if(Object.keys(selectedChat).length === 0)
    {
      setErrorMessage('');
      setErrorMessage('Select a group first.');
      return;
    }
    setformClass('');
    setformClass2('hidden');
  }

  const handleAddValue = () => {
    const newChat = {
      id: selectedChat.length+1,
      title: title,
      image: src,
    }
    selectedChat.push(newChat)
    setformClass('hidden');
    setformClass2('');
    setTitle('');
    setSrc('');
  };

  
  return (
    <div className="home">
        <div className="left">
        {chats.map((groupData, index) => {
        const groupKey = Object.keys(groupData)[0];
        return (
            <Chat title={groupKey} key={index}
            chatData={groupData}
            onClick={handleChatClick}/>
            );
      })}
        </div>
        <div className="right">
          <div className={formClass2}>
        {errorMessage && <div id="error-message">{errorMessage}</div>}
        {(selectedChat.length > 0 && (
          selectedChat.map((chatInfo, index) => (
          <Chats chatIn={chatInfo} title={chatInfo.title} src={chatInfo.image} key={index} id={chatInfo.id}/>
          ))  
        ))}
        </div>
        <div className={formClass}>
          <div className="form">
          <input type="text" name="title" value={title} onChange={handleTitle} placeholder="Enter title" /><br/>
          <input type="text" name="image" value={src} onChange={handleSrc} placeholder="Enter image url"/><br/>
          <button onClick={handleAddValue}>Add</button>
          </div>
        </div>
          <span className="input-span">
            <input className="input" placeholder="Enter your message."/>
            <button onClick={handleAdd}>+</button>
          </span>
        </div>
    </div>
  )
}

export default Home