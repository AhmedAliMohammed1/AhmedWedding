import { useEffect, useState } from 'react';
import { calculateCountdown } from '../../lib/countdown';
export function Countdown({weddingDate, timezone}: {weddingDate:string; timezone:string}) {
 const [value,setValue]=useState(()=>calculateCountdown(weddingDate));
 useEffect(()=>{setValue(calculateCountdown(weddingDate)); const timer=window.setInterval(()=>setValue(calculateCountdown(weddingDate)),1000);return ()=>window.clearInterval(timer)},[weddingDate]);
 const items=[['يوم',value.days],['ساعة',value.hours],['دقيقة',value.minutes],['ثانية',value.seconds]] as const;
 return <section className="countdown-section" id="countdown" aria-labelledby="countdown-heading"><header className="section-heading"><h2 id="countdown-heading">نعدّ اللحظات حتى نلقاكم</h2></header>{!value.valid?<p role="status">سيُعلن موعد الحفل قريبًا.</p>:value.complete?<p role="status">حان موعد فرحتنا، أهلًا بكم في حكايتنا!</p>:<><div className="countdown-grid" aria-live="off">{items.map(([label,num])=><div className="countdown-cell" key={label}><strong>{num.toLocaleString('ar-EG',{minimumIntegerDigits:2})}</strong><span>{label}</span></div>)}</div><p className="timezone-note">{timezone==='Africa/Cairo'?'بتوقيت القاهرة':timezone}</p></>}</section>
}
