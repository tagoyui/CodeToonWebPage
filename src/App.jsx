function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">COOD TOON</h1>
        </div>
      </div>
    </header>
  );
}

function Main() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="image/icon.png"></img>
              </figure>
            </div>
            <div className="media-content">
              <p className="title">概要</p>
            </div>
          </div>
          <div className="content">
            ゲーム形式で楽しくプログラミングが学習できる対戦型パズルゲーム
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="image/icon.png"></img>
              </figure>
            </div>
            <div className="media-content">
              <p className="title">ルール</p>
            </div>
          </div>
          <div className="content">
            適当なプログラムを入力することによって相手の陣地を攻撃や自分の陣地を防御できる相手の陣地を全て制覇することで勝利となる。
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="image/icon.png"></img>
              </figure>
            </div>
            <div className="media-content">
              <p className="title">操作</p>
            </div>
          </div>
          <div className="content">
            同じWiFiに繋がった2台のパソコン同士で対戦ができる。
            入力部分で相手のマスへの攻撃や自分のマスの防御などのコードがかける。色々な関数などを駆使して攻略しよう。
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="image/icon.png"></img>
              </figure>
            </div>
            <div className="media-content">
              <p className="title">コードと使用例</p>
            </div>
          </div>
          <div className="content">
            <table class="table">
              <tr>
                <th>名前</th>
                <th>説明</th>
                <th>使用例</th>
              </tr>
              <tr>
                <td>attack</td>
                <td>メモリを指定して攻撃</td>
                <td>attack(enemy.memory[0][0]);</td>
              </tr>
              <tr>
                <td>setPass</td>
                <td>メモリにロックをかける</td>
                <td>memory[0][0].setPass(0000);</td>
              </tr>
              <tr>
                <td>connect</td>
                <td>メモリにアクセスしてコードを表示</td>
                <td>memory[0][0].connect()</td>
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
      <Main />
    </div>
  );
}

export default App;
