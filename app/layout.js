import Provider from "@/lib/Provider";
import Header from "./components/layout/Header";
import { getCurrentUser } from "@/lib/getCurrentData";
import "./globals.css";

export const metadata = {
  title: "실력 비교 사이트",
  description: "게임 랭킹 순위를 정령해 놓은 사이트",
};

export default async function RootLayout({ children }) { 
  const userId = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <Provider>
          <Header userId={userId} />
          
          <div className="">{children}</div>
        </Provider>
      </body>
      
    </html>
  );
}
