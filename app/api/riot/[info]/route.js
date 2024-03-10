import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {

    const splitText = params.info.split(","); // split 역할 params.info 를 ,로 구분해서 배열로 저장
    console.log(splitText)

    const test = {a: "test"}

    try {
      const resData = await fetch(`${process.env.NEXT_PUBLIC_RIOT_USER_INFO_URI}/${splitText[0]}/${splitText[1]}?api_key=${process.env.RIOT_API_KEY}`);

      if (resData.ok) {
        const userInfo = await resData.json();
        console.log(userInfo)

        //profileIconId, revisionDate 값을 알기 위해서 또 다른 api 호출
        // 또 api 호출
        //profileIconId, revisionDate 값 받음

        //몽고디비에 저장하는 로직 작성한다.
        //db 필드 전체 저장하고 데이터 리턴하고 끝


      }
    } catch (error) {
      console.log("Error user info API:", error);
    }

    
    return NextResponse.json(test)
  } catch (error) {
    console.log('Error riot api:', error)
    return NextResponse.json(error.message)
  }
}