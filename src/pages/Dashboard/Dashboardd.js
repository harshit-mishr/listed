import style from './Dashboardd.module.css'
import React, { useEffect  ,useState} from "react"
import {TfiSearch} from 'react-icons/tfi'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import { FiPieChart, FiUsers } from 'react-icons/fi'
import { TbCalendarTime, TbTags } from 'react-icons/tb'
import { BiUserCircle } from 'react-icons/bi'
import { AiFillSetting, AiOutlineLike } from 'react-icons/ai'
import { PieChart } from '../../component/PieChart'
import { LineChart } from '../../component/LineChart'
import axios from "axios";
import { GrCamera } from 'react-icons/gr'
export default function Dashboardd() {
    const [ data , setData] = useState([])
    async function getRandomUsers() {
        try {
          const data = await axios.get("https://dummyjson.com/products");
          setData(data.data?.products);
          console.log(data.data?.products)
        } catch(err) {
          console.log("error: ", err);
        }
      }

    useEffect(()=>{
       
    getRandomUsers()
      
    },[])
    return(
        <>
        <div className={style.container}>
        <div className={style.left}>
        <h2>Board.</h2>
        <p className={style.dashboardHead}>  <FiPieChart className={style.menuIcon} />  Dashboard</p>
        <p> <TbTags className={style.menuIcon}/> Transactions</p>
        <p> <TbCalendarTime className={style.menuIcon}/> Schedules</p>
        <p>  <BiUserCircle className={style.menuIcon}/> Users</p>
        <p>  <AiFillSetting className={style.menuIcon}/> Setting</p>

        <div className={style.connectUs}>
        <p>Help</p>
        <p>Contact Us</p>
        </div>

        </div>
     
        <div className={style.rightContainer}>
        <div className={style.dashboard}>
            <div className={style.heading}>
            <h1>Dashboard</h1>

            <div className={style.avatarContainer}>
            <div className={style.searchBarContainer}>
            <input placeholder='Search...'/>
            <TfiSearch/>
            </div>
            <MdOutlineNotificationsNone className={style.bellIcon}/>
            <img src='https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg' alt="avatar"/>
            </div>

            </div>
            <div className={style.card}>
            
            <div className={style.card1}>
            <div><div className={style.title}>Total Revenues</div><h2>${data[0]?.price *Math.floor(Math.random()*10000)}</h2></div>
            <div><GrCamera className={style.icon}/></div>
            </div>
            <div className={style.card2}>
            <div><div className={style.title}>Total Transactions</div><h2>{data[1]?.price *10}</h2></div>
            <div><TbTags className={style.icon}/></div>
            </div>
            <div className={style.card3}>
            <div><div className={style.title}>Total Likes</div><h2>{data[2]?.price}</h2></div>
            <div><AiOutlineLike className={style.icon}/></div>
            </div>
            <div className={style.card4}>
            <div><div className={style.title}>Total Users</div><h2>{data[3]?.price}</h2></div>
            <div><FiUsers className={style.icon}/></div>
            </div>
            </div>
            <div className={style.line}>
            <div className={style.lineChart}>
            <p className={style.activity}>Activities</p>
            <p className={style.date}>May - June 2021</p>
            </div>
            <div className={style.lineGraph}> <LineChart /></div>
           
            </div>
            <div className={style.chart}>
              <div className={style.pie}>
            
              <div className={style.labels}>
              <h2>Top Products</h2>
              <PieChart className={style.pieGraph}/>
              </div>
              <div className={style.labelContainer}>
              <p  id={style.month}>May-June 2021 🔻</p>
              <div>
              <div className={style.label}>
              <div style={{display:"flex"}}>
              <li></li>
              <p>Basic Tree</p>
              </div>
              <span className={style.percent}>55%</span>
               </div>
              <div className={style.label}>
              <div style={{display:"flex"}}>
            <li style={{color : "rgba(246, 220, 125, 1)"}}></li>
              <p>Custom Short Paints</p>
              </div>
              <span className={style.percent}>55%</span>
               </div>
              <div className={style.label}>
              <div style={{display:"flex"}}>
              <li  style={{color : "rgba(238, 132, 132, 1)"}}></li>
              <p>Super Hoodies</p>
              </div>
              <span className={style.percent}>55%</span>
               </div>
    
              </div>
              </div>
              
              </div>
              <div className={style.today}>
              <div  className={style.todayHeading}>
              <h3>Today's shedule</h3>
              <p>See All<span>{">"}</span></p>
              </div>
            
              <div className={style.meetDiv}>
              <h5 className={style.meet}>Meeting with suppliers from Kuta Bali</h5>
              <p className={style.meetPara}>14.00-15.00</p>
              <p className={style.meetPara}>at Sunset Road, Kuta, Bali </p>
              </div>

              <div className={style.meetDiv1}>
              <h5  className={style.meet}>Check operation at Giga Factory 1</h5>
              <p className={style.meetPara}>18.00-20.00</p>
              <p className={style.meetPara}>at Central Jakarta</p>
              </div>
              
              
              </div>
            </div>
        </div>
        </div>
        
        </div>
        </>
    )
}