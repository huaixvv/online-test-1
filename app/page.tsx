'use client'

import Image from "next/image";
import './page.css'
import {useRouter} from "next/navigation";

type menu = {
  title: string,
  path: string
}

export default function Home() {

  const router = useRouter()

  const menus: Array<menu> = [
    {
      title: 'ABOUT', path: '/about'
    },
    {
      title: 'POINTS', path: 'points'
    },
    {
      title: 'WAITLIST', path: 'waitlist'
    }
  ]

  const menuClick = (path: string) => {
    router.push(path)
  }


  return (
    <main className="flex h-screen min-w-full justify-between flex-wrap">
      <div className="bg-amber-200 w-screen test-box">
        <div className="bg-cloud w-full">
          <div className="bg-house">

            <div className="m-top flex w-full justify-between">
              <img className="cursor-pointer" src="../static/imgs/logo.svg" alt=""/>
              <div className="menu">
                {
                  menus.map(item => <span className="cursor-pointer" onClick={() => menuClick(item.path)}>{item.title}</span>)
                }
              </div>
            </div>
            <div className="content">
              <div className="info">
                <div className="title flex flex-wrap">
                  <span className="t-g">GAMBLE FOR FREE</span>
                  <span className="t-e">EARN POINTS</span>
                </div>

                <div className="list-btn">
                  <div className="list">
                    <p>
                      <img src="../static/imgs/icon.svg" alt=""/>
                      <span>Click Launch app</span>
                    </p>
                    <p>
                      <img src="../static/imgs/icon.svg" alt=""/>
                      <span>Connect your wallet</span>
                    </p>
                    <p>
                      <img src="../static/imgs/icon.svg" alt=""/>
                      <span>Enter your invite code</span>
                    </p>
                  </div>

                  <div className="btn-group">
                    <div className="btn-1 btn-15" onClick={() => menuClick('/launch-app')}>LAUNCH APP</div>
                    <div className="btn-2" onClick={() => menuClick('more')}>LEARN MORE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
