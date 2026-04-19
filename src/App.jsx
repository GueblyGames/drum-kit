import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
const logoWhite = "/images/logo.png";




/* ── Keyframes ─────────────────────────────────── */
const gridScr = keyframes`0%{background-position:0 0}100%{background-position:0 60px}`;
const fadeUp  = keyframes`from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}`;
const ringOut = keyframes`0%{transform:translate(-50%,-50%) scale(1);opacity:.7}100%{transform:translate(-50%,-50%) scale(2);opacity:0}`;



/* ── Layout ─────────────────────────────────────── */
const Page = styled.div`
  min-height:100vh;background:#02020E;display:flex;flex-direction:column;position:relative;overflow:hidden;
`;
const GridBg = styled.div`
  position:fixed;inset:0;pointer-events:none;z-index:0;
  background-image:linear-gradient(rgba(0,163,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,163,255,.03) 1px,transparent 1px);
  background-size:60px 60px;animation:${gridScr} 20s linear infinite;
`;
const Glow = styled.div`
  position:fixed;width:min(600px,100vw);height:min(600px,100vw);border-radius:50%;
  left:50%;top:40%;transform:translate(-50%,-50%);
  background:radial-gradient(circle,rgba(0,163,255,.06) 0%,transparent 70%);
  pointer-events:none;z-index:0;
`;

/* ── TopBar ─────────────────────────────────────── */
const TopBar = styled.header`
  position:relative;z-index:10;
  display:flex;align-items:center;justify-content:space-between;
  padding:15px 48px;border-bottom:1px solid rgba(0,163,255,.08);
  background:rgba(2,2,14,.94);backdrop-filter:blur(14px);
  @media(max-width:560px){padding:13px 20px}
`;
const BackBtn = styled.a`
  display:flex;align-items:center;gap:6px;
  font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.22em;
  color:rgba(255,255,255,.4);text-decoration:none;text-transform:uppercase;transition:color .25s;
  span{font-size:14px}
  &:hover{color:#00A3FF}
`;
const LogoImg = styled.a`display:flex;align-items:center;img{height:30px;object-fit:contain}`;
const Chip = styled.span`
  font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.28em;
  color:rgba(0,163,255,.5);border:1px solid rgba(0,163,255,.15);padding:4px 12px;text-transform:uppercase;
  @media(max-width:560px){display:none}
`;

/* ── Title ──────────────────────────────────────── */
const TitleArea = styled.div`
  text-align:center;padding:22px 20px 8px;position:relative;z-index:2;
  animation:${fadeUp} .55s ease both;
`;
const H1 = styled.h1`
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(48px,10vw,100px);line-height:.85;
  background:linear-gradient(135deg,#fff 30%,#00A3FF 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:.04em;
`;
const Sub = styled.p`
  font-family:'Rajdhani',sans-serif;font-size:13px;letter-spacing:.26em;
  color:rgba(255,255,255,.25);text-transform:uppercase;margin-top:4px;
`;

/* ── Visualizer ─────────────────────────────────── */
const Viz = styled.div`
  position:relative;z-index:2;
  display:flex;align-items:flex-end;justify-content:center;
  gap:3px;height:40px;padding:0 40px;max-width:640px;width:100%;margin:4px auto;
`;
const Bar = styled.div`
  width:5px;border-radius:3px 3px 0 0;transform-origin:bottom;
  background:linear-gradient(to top,#00A3FF,#C800FF);
  height:${p=>p.$h}px;opacity:${p=>p.$h>3?1:.15};transition:height .06s ease;
`;

/* ── Pads ───────────────────────────────────────── */
const PadsWrap = styled.div`
  position:relative;z-index:2;
  display:flex;justify-content:center;align-items:center;
  padding:8px 20px;flex:1;
`;
const PadGrid = styled.div`
  display:grid;grid-template-columns:repeat(3,1fr);gap:10px;
  width:100%;max-width:640px;
`;
const PadOuter = styled.div`position:relative;padding-bottom:75%`;
const PadBtn = styled.button`
  position:absolute;inset:0;
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;
  background:${p=>p.$a?`rgba(8,8,24,.95)`:'rgba(8,8,24,.8)'};
  border:1px solid ${p=>p.$a?p.$c:'rgba(0,163,255,.1)'};
  border-radius:3px;overflow:hidden;
  box-shadow:${p=>p.$a?`0 0 28px ${p.$c}55,inset 0 0 16px ${p.$c}15`:'none'};
  transform:${p=>p.$a?'scale(.95)':'scale(1)'};
  transition:border-color .08s,box-shadow .08s,transform .08s;
  &:before{content:'';position:absolute;inset:0;background:${p=>`linear-gradient(135deg,${p.$c}10,transparent)`}}
`;
const PadKey  = styled.div`
  font-family:'Orbitron',monospace;font-size:20px;font-weight:700;
  color:${p=>p.$a?p.$c:'rgba(255,255,255,.65)'};position:relative;z-index:1;transition:color .08s;
`;
const PadName = styled.div`
  font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:600;letter-spacing:.2em;
  text-transform:uppercase;color:${p=>p.$a?'rgba(255,255,255,.9)':'rgba(255,255,255,.28)'};
  position:relative;z-index:1;transition:color .08s;
`;
const PadAccent = styled.div`
  position:absolute;bottom:0;left:0;right:0;height:2px;
  background:${p=>p.$c};
  transform:scaleX(${p=>p.$a?1:0});transition:transform .12s;
  box-shadow:${p=>p.$a?`0 0 8px ${p.$c}`:''};
`;
const RingEl = styled.div`
  position:absolute;top:50%;left:50%;
  width:60%;height:60%;border-radius:50%;
  border:2px solid ${p=>p.$c};pointer-events:none;
  animation:${ringOut} .45s ease forwards;
`;

/* ── Composer ────────────────────────────────────── */
const Composer = styled.div`
  position:relative;z-index:2;
  max-width:640px;width:100%;margin:0 auto;padding:12px 20px 36px;
`;
const CompLabel = styled.div`
  font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.28em;
  color:rgba(0,163,255,.45);text-transform:uppercase;margin-bottom:10px;
  display:flex;align-items:center;gap:10px;
  &::before{content:'';width:16px;height:1px;background:#00A3FF}
`;
const Row = styled.div`display:flex;gap:8px;flex-wrap:wrap`;
const Input = styled.input`
  flex:1;min-width:140px;background:rgba(8,8,24,.9);
  border:1px solid rgba(0,163,255,.18);color:#fff;
  font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.12em;
  padding:11px 14px;outline:none;transition:border-color .3s;
  &::placeholder{color:rgba(255,255,255,.2);font-size:10px}
  &:focus{border-color:rgba(0,163,255,.45)}
`;
const BpmIn = styled(Input)`width:90px;flex:0 0 90px;text-align:center`;
const PlayBtn = styled.button`
  font-family:'Rajdhani',sans-serif;font-weight:700;font-size:13px;
  letter-spacing:.2em;text-transform:uppercase;padding:11px 26px;
  background:linear-gradient(135deg,#00A3FF,#6B00FF);border:none;color:#fff;
  clip-path:polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%);
  transition:all .3s;
  &:hover{box-shadow:0 0 20px rgba(0,163,255,.4);transform:translateY(-2px)}
`;
const Hints = styled.div`display:flex;flex-wrap:wrap;gap:5px;margin-top:8px`;
const Hint  = styled.span`
  font-family:'Space Mono',monospace;font-size:8px;letter-spacing:.15em;
  color:rgba(255,255,255,.22);border:1px solid rgba(255,255,255,.06);padding:2px 7px;text-transform:uppercase;
`;

/* ── Pad data ────────────────────────────────────── */
const PADS = [
  {key:'q',label:'BASS',   color:'#00A3FF'},
  {key:'w',label:'SNARE',  color:'#C800FF'},
  {key:'e',label:'HI-HAT', color:'#00FF88'},
  {key:'a',label:'TOM 1',  color:'#FF6B00'},
  {key:'s',label:'TOM 2',  color:'#FFB800'},
  {key:'d',label:'TOM 3',  color:'#FF0066'},
  {key:'z',label:'CRASH',  color:'#A855F7'},
  {key:'x',label:'RIDE',   color:'#06B6D4'},
  {key:'c',label:'OPEN HH',color:'#84CC16'},
];
const SOUNDS = {
  q:'/sounds/keyq.wav',w:'/sounds/keyw.wav',e:'/sounds/keye.wav',
  a:'/sounds/keya.wav',s:'/sounds/keys.wav',d:'/sounds/keyd.wav',
  z:'/sounds/keyz.wav',x:'/sounds/keyx.wav',c:'/sounds/keyc.wav',
};
const VIZ = 28;

export default function DrumKit(){
  // strings hardcoded PT-BR
  React.useEffect(() => { document.title = 'Bateria Virtual — Guebly Games' }, []);
  const [active,  setActive]  = useState({});
  const [rings,   setRings]   = useState({});
  const [vizH,    setVizH]    = useState(Array(VIZ).fill(2));
  const audioCtx  = useRef(null);
  const buffers   = useRef({});
  const vizTimer  = useRef(null);
  const compRef   = useRef(null);
  const bpmRef    = useRef(null);

  /* Load sounds via AudioContext (works everywhere, no CORS) */
  useEffect(()=>{
    let ctx;
    const load = async ()=>{
      try{
        ctx = new (window.AudioContext||window.webkitAudioContext)();
        audioCtx.current = ctx;
        await Promise.all(PADS.map(async p=>{
          try{
            const res = await fetch(`/sounds/key${p.key}.wav`);
            const ab  = await res.arrayBuffer();
            buffers.current[p.key] = await ctx.decodeAudioData(ab);
          }catch(e){}
        }));
      }catch(e){}
    };
    load();
    return()=>{ if(ctx&&ctx.state!=='closed') ctx.close(); };
  },[]);

  const playSound = useCallback((key)=>{
    const buf = buffers.current[key];
    const ctx = audioCtx.current;
    if(!buf||!ctx) return;
    if(ctx.state==='suspended') ctx.resume();
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start();
  },[]);

  const triggerPad = useCallback((key)=>{
    playSound(key);
    // Active flash
    setActive(p=>({...p,[key]:true}));
    setTimeout(()=>setActive(p=>({...p,[key]:false})),160);
    // Ring effect
    const ringId = Date.now();
    setRings(p=>({...p,[key]:ringId}));
    setTimeout(()=>setRings(p=>({...p,[key]:p[key]===ringId?null:p[key]})),480);
    // Visualizer burst
    setVizH(Array(VIZ).fill(0).map((_,i)=>{
      const c=VIZ/2, d=Math.abs(i-c);
      return Math.max(3, 38-d*3.2+Math.random()*10);
    }));
    clearTimeout(vizTimer.current);
    vizTimer.current = setTimeout(()=>setVizH(Array(VIZ).fill(2)),380);
  },[playSound]);

  /* Keyboard */
  useEffect(()=>{
    const onKey=(e)=>{
      if(e.repeat)return;
      const k=e.key.toLowerCase();
      if(PADS.some(p=>p.key===k)) triggerPad(k);
    };
    window.addEventListener('keydown',onKey);
    return()=>window.removeEventListener('keydown',onKey);
  },[triggerPad]);

  /* Composer play */
  const playComposer=()=>{
    const seq=(compRef.current?.value||'').toLowerCase();
    const ms =parseInt(bpmRef.current?.value||'200');
    if(!seq) return;
    let t=0;
    seq.split('').forEach(k=>{
      if(PADS.some(p=>p.key===k)){
        setTimeout(()=>triggerPad(k),t);
        t+=ms;
      }
    });
  };

  return(
    <Page>
      <GridBg/><Glow/>
      <TopBar>
        <BackBtn href="https://games.guebly.com.br"><span>←</span>{'VOLTAR'}</BackBtn>
        <LogoImg href="https://games.guebly.com.br"><img src={logoWhite} alt="Guebly Games" style={{height:"32px",objectFit:"contain",display:"block"}}/></LogoImg>
        <Chip>Drum Kit</Chip>
      </TopBar>

      <TitleArea>
        <H1>DRUM KIT</H1>
        <Sub>{'TOQUE COM O TECLADO OU CLIQUE NOS PADS'}</Sub>
      </TitleArea>

      <Viz>
        {vizH.map((h,i)=><Bar key={i} $h={h}/>)}
      </Viz>

      <PadsWrap>
        <PadGrid>
          {PADS.map(pad=>{
            const isActive=!!active[pad.key];
            const ringId=rings[pad.key];
            return(
              <PadOuter key={pad.key}>
                <PadBtn $a={isActive} $c={pad.color} onClick={()=>triggerPad(pad.key)}>
                  {ringId&&<RingEl key={ringId} $c={pad.color}/>}
                  <PadKey $a={isActive} $c={pad.color}>{pad.key.toUpperCase()}</PadKey>
                  <PadName $a={isActive}>{pad.label}</PadName>
                  <PadAccent $a={isActive} $c={pad.color}/>
                </PadBtn>
              </PadOuter>
            );
          })}
        </PadGrid>
      </PadsWrap>

      <Composer>
        <CompLabel>{'COMPOSITOR'}</CompLabel>
        <Row>
          <Input ref={compRef} placeholder={'Ex: q w e q w e'} maxLength={100}/>
          <BpmIn ref={bpmRef} type="number" defaultValue="220" min="50" max="1200" placeholder="ms"/>
          <PlayBtn onClick={playComposer}>{'TOCAR'}</PlayBtn>
        </Row>
        <Hints>
          {PADS.map(p=><Hint key={p.key}>{p.key}={p.label.split(' ')[0]}</Hint>)}
        </Hints>
      </Composer>
    </Page>
  );
}
