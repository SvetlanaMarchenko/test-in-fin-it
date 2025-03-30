import './data-list.css';
import React, { useState, useEffect, useRef } from 'react';  
import { List, ListItem, ListItemText } from '@mui/material';

function DataList({ onItemClick }) {
  const [data, setData] = useState([]);
  const loadingRef = useRef(false);
  const observerTarget = useRef(null);

  const appendPage = () => {
    // console.log("appendPage. Current data is ", data)
    if (loadingRef.current) return;
    
    loadingRef.current = true;
    fetch(`http://localhost:3002/users?_start=${data.length}&_limit=10`)
      .then((response) => response.json())
      .then((freshlyFetchedData) => {
        setData(prevData => {
          // console.log("Fetched: prevData: ", prevData)
          // console.log("Fetched: freshlyFetchedData: ", freshlyFetchedData)
          return [...prevData, ...freshlyFetchedData]
        }); 
        loadingRef.current = false;
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
        loadingRef.current = false;
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          appendPage()
        }
      },
      { threshold: 1 }
    );
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, []);

  return (
    <div className="data-list">
      <List className="data-list-info">
        {data.map((item) => (
          <ListItem button key={item.id} onClick={() => onItemClick(item)}>
            <ListItemText primary={`${item.first_name} ${item.last_name}`} />
          </ListItem>
        ))}
          <div id="observerElem" ref={observerTarget} style={{backgroundColor:"lightyellow", height: "40px"}}>
            Loading..
          </div>
      </List>

      
    </div>
  );
}

export default DataList;
