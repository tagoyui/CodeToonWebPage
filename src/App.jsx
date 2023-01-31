function Header() {
  return (
    <header className="hero is-black is-fullheight">
      <div className="container">
        <div className="hero-body">
          <h1 className="title">CODE TOON</h1>
        </div>
      </div>
      <div className="container">
        <Main />
      </div>
    </header>
  );
}

function Body() {
  console.log(0);
  return;
}

function Main() {
  return (
    <div>
      <div className="card has-background-black  has-text-white">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="image/icon.png"></img>
              </figure>
            </div>
            <p className="title has-text-white">成果物</p>
          </div>
          <div className="content">
            ・企画書：
            <a href="dc2022_13.pdf" target="_blank">
              <u>dc2022_13.pdf</u>
            </a>
          </div>
          <div className="content">
            ・プログラム本体：
            <a
              href="https://github.com/NagoshiTakaaki/CodeToon/releases/tag/1.5.0"
              target="_blank"
            >
              <u>リリースリンク</u>
            </a>
          </div>
          <div className="content">
            ・ソースコード：
            <a
              href="https://github.com/NagoshiTakaaki/CodeToon"
              target="_blank"
            >
              <u>githubリポジトリ</u>
            </a>
          </div>
          <div className="content">
            ・紹介動画：
            <a
              href="https://youtu.be/h3FOs3H2Ivs"
              target="_blank"
            >
              <u>Youtube</u>
            </a>
          </div>
        </div>
      </div>

      <div className="card has-background-black  has-text-white">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="image/icon.png"></img>
              </figure>
            </div>
            <p className="title has-text-white">ルール</p>
          </div>
          <div className="content">
            適当なプログラムを入力することによって相手の陣地を攻撃や自分の陣地を防御できる相手の陣地を全て制覇することで勝利となる。
          </div>
        </div>
      </div>

      <div className="card has-background-black  has-text-white">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="image/icon.png"></img>
              </figure>
            </div>
            <p className="title has-text-white">操作</p>
          </div>
          <div className="content">
            同じWiFiに繋がった2台のパソコン同士で対戦ができる。
            入力部分で相手のマスへの攻撃や自分のマスの防御などのコードがかける。色々な関数などを駆使して攻略しよう。
          </div>
        </div>
      </div>

      <div className="card has-background-black  has-text-white">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="image/icon.png"></img>
              </figure>
            </div>
            <p className="title has-text-white">コードと使用例</p>
          </div>
          <div className="content">
            <table className="table has-background-black  has-text-white">
              <thead className="">
                <tr>
                  <th>名前</th>
                  <th>説明</th>
                  <th>使用例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>attack</td>
                  <td>メモリーを指定して攻撃する</td>
                  <td>attack(enemy.memory[0][0]);</td>
                </tr>
                <tr>
                  <td>setPass</td>
                  <td>メモリーにロックをかける</td>
                  <td>memory[0][0].setPass(0000);</td>
                </tr>
                <tr>
                  <td>connect</td>
                  <td>メモリーにアクセスしてコードを表示する</td>
                  <td>memory[0][0].connect();</td>
                </tr>
                <tr>
                  <td>recovery</td>
                  <td>アクセスされたメモリーを回復する</td>
                  <td>recover(memory[0][0]);</td>
                </tr>
                <tr>
                  <td>print</td>
                  <td>内容を出力する</td>
                  <td>print("Hello, World");</td>
                </tr>
                <tr>
                  <td>if文</td>
                  <td></td>
                  <td>
                    if(Boolean i){"{"}INSIDE{"}"}
                  </td>
                </tr>
                <tr>
                  <td>for文</td>
                  <td></td>
                  <td>
                    for(int value; Boolean i; action){"{"}INSIDE{"}"}
                  </td>
                </tr>
                <tr>
                  <td>getH()</td>
                  <td>陣地の高さを表示する</td>
                  <td>int h = getH();</td>
                </tr>
                <tr>
                  <td>getW()</td>
                  <td>陣地の幅を表示する</td>
                  <td>int w = getW();</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
