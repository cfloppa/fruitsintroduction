    // app/page.js
    export default function Page() {
        return <div>
                <h1>Hi again chat</h1>
                <p>These are a few good songs:</p>
                <p>Franz Ferdinand - Take Me Out</p>
                <audio controls>
                    <source src="/takemeout.mp3" type="audio/mpeg"></source>
                </audio> <br></br>
                <p>TV Girl - Lovers Rock</p>
                <audio controls>
                    <source src="/loversrock.mp3" type="audio/mpeg"></source>
                </audio> 
                <p>Sebastian Robertson and Daniel Davies & The Unresolved - WORLDS from Cyberpunk 2077</p>
                <audio controls>
                    <source src="/worlds.mp3" type="audio/mpeg"></source>
                </audio> 
                <p>Ashnikko - Paint The Town Blue from Arcane</p>
                <audio controls>
                    <source src="/paintthetownblue.mp3" type="audio/mpeg"></source>
                </audio> 
                <p>Freddie Dread - Frank Miller (Kill Again)</p>
                <audio controls>
                    <source src="/frankmiller.mp3" type="audio/mpeg"></source>
                </audio> 
            </div>;
      }