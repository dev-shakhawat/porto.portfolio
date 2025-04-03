import React from 'react'

const List = ({listarr , boxstyle , liststyle , link}) => {
  return (
    <ul className={boxstyle}>
        {link ? 
        listarr.map((item , index) => {
            return <li key={index} className={liststyle}><a href={link}>{item.list}</a></li>
        }) : 
        listarr.map((item , index) => {
            return <li key={index} className={liststyle}>{item.list}</li>
        })
        }
    </ul>
  )
}

export default List