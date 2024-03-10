"use client"

import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState(''); //닉네임과 태그 인풋 상태 관리

  const handleSearch = async () => {
    const splitText = userInput.split("#"); //split 역할 #으로 구분해서 배열로 저장

    const res = await fetch(`/api/riot/${splitText}`) //get 통신(요청)
    const riotData = await res.json()
    console.log(riotData, splitText)

  }
  
  return (
    <div className="flex flex-col items-center">

      <label htmlFor="">닉네임과 태그를 입력해주세요 (하보리#카탈아)</label>
      <input 
        type="text" 
        className="w-64 mt-7 border border-gray-300"
        onChange={(e) => setUserInput(e.target.value)} 
      />

      <button type="button" onClick={handleSearch} className="mt-7 bg-sky-500 hover:bg-gray-700 text-white font-bold py-1.5 px-6 rounded-full">조회하기</button>

    </div>
  )
}
