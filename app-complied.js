const {
  useState,
  useEffect,
  useCallback
} = React;
 
// ==== CONFIG: paste your Google Apps Script Web App URL here after deploying it ====
const API_PROXY_URL = "https://script.google.com/macros/s/AKfycbwNtKjtEMqG3oEns5fhckTKlfrugQRH-ctkpiFdLvED2A2DQOdBu8Dq-AcnnqguxRZF/exec";
 
// ==== Minimal inline icon set (replaces lucide-react for standalone use) ====
function Icon({
  children,
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className
  }, children);
}
const Home = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 22V12h6v10"
}));
const Utensils = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 2v7c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2v20"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 2c-1 0-3 1-3 5v3c0 1 .5 2 2 2h1v10"
}));
const Dumbbell = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M6.5 6.5l11 11"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 21l-1-1M4 4l-1-1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 7l4-4M17 21l4-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 8.5l2-2M18.5 17.5l2-2"
}));
const ScaleIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 7l-3 6a3.5 3.5 0 0 0 7 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 7l-3 6a3.5 3.5 0 0 0 7 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 21h12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 7h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 3h6"
}));
const User = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 21c0-4 3.5-7 8-7s8 3 8 7"
}));
const Plus = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M5 12h14"
}));
const X = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 6L6 18M6 6l12 12"
}));
const Check = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 6L9 17l-5-5"
}));
const Flame = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 2c1 4-3 5-3 9a3 3 0 0 0 6 0c0-1-.5-2-.5-2 2 1 3.5 3 3.5 5a6 6 0 0 1-12 0c0-5 3-6 3-9 1 0 2 .5 3-3z"
}));
const Wheat = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 2v20"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 6l3-2M12 6l-3-2M12 10l3-2M12 10l-3-2M12 14l3-2M12 14l-3-2M12 18l3-2M12 18l-3-2"
}));
const Droplet = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"
}));
const Beef = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"
}));
const ChevronRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M9 18l6-6-6-6"
}));
const TrendingDown = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M23 18l-9.5-9.5-5 5L1 6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 18h6v-6"
}));
const TrendingUp = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M23 6l-9.5 9.5-5-5L1 18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 6h6v6"
}));
const Trash2 = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6h12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 11v6M14 11v6"
}));
const Loader2 = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 12a9 9 0 1 1-9-9"
}));
const Search = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 21l-4.3-4.3"
}));
const Pencil = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 20h9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"
}));
const Camera = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "13",
  r: "4"
}));
 
// ==== Minimal local storage-backed shim for window.storage (replaces Claude artifact storage) ====
// ==== CONFIG: paste your Supabase project URL and anon key here ====
const SUPABASE_URL = "https://ucrsvzekjjyjdtadhxfw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcnN2emVramp5amR0YWRoeGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwNTg3MTgsImV4cCI6MjA5NDYzNDcxOH0.CwXWPd2lU3IfEgt4eRaM8D_kRmBQSYA_zedV9CbIElY";
async function sbFetch(path, method = "GET", body) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method,
    headers: {
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      "Prefer": method === "POST" ? "resolution=merge-duplicates" : "return=representation"
    },
    body: body ? JSON.stringify(body) : undefined
  });
  if (!res.ok) throw new Error(`Supabase ${method} failed: ${res.status}`);
  if (method === "DELETE") return null;
  return res.json();
}
 
// window.storage: syncs to Supabase (shared across devices), with localStorage as an instant-load
// cache and offline fallback if the network/Supabase call fails.
window.storage = {
  async get(key) {
    try {
      const rows = await sbFetch(`kv_store?key=eq.${encodeURIComponent(key)}&select=value`);
      if (rows && rows.length > 0) {
        localStorage.setItem(key, rows[0].value);
        return {
          key,
          value: rows[0].value,
          shared: false
        };
      }
      const local = localStorage.getItem(key);
      return local !== null ? {
        key,
        value: local,
        shared: false
      } : null;
    } catch (e) {
      console.error("Supabase get failed, using local cache:", e);
      const local = localStorage.getItem(key);
      return local !== null ? {
        key,
        value: local,
        shared: false
      } : null;
    }
  },
  async set(key, value) {
    localStorage.setItem(key, value);
    try {
      await sbFetch("kv_store?on_conflict=key", "POST", [{
        key,
        value
      }]);
    } catch (e) {
      console.error("Supabase set failed, saved locally only:", e);
    }
    return {
      key,
      value,
      shared: false
    };
  },
  async delete(key) {
    localStorage.removeItem(key);
    try {
      await sbFetch(`kv_store?key=eq.${encodeURIComponent(key)}`, "DELETE");
    } catch (e) {
      console.error("Supabase delete failed:", e);
    }
    return {
      key,
      deleted: true,
      shared: false
    };
  },
  async list(prefix) {
    try {
      const filter = prefix ? `&key=like.${encodeURIComponent(prefix)}*` : "";
      const rows = await sbFetch(`kv_store?select=key${filter}`);
      return {
        keys: rows.map(r => r.key),
        shared: false
      };
    } catch (e) {
      const keys = Object.keys(localStorage).filter(k => !prefix || k.startsWith(prefix));
      return {
        keys,
        shared: false
      };
    }
  }
};
async function fetchWithRetry(url, options, retries = 1) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response;
    } catch (e) {
      lastError = e;
      if (attempt < retries) await new Promise(r => setTimeout(r, 600));
    }
  }
  throw lastError;
}
 
// ---------- helpers ----------
const todayStr = () => new Date().toISOString().slice(0, 10);
const fmtDateHe = d => new Date(d).toLocaleDateString("he-IL", {
  day: "numeric",
  month: "short"
});
const ACTIVITY_LEVELS = [{
  id: "sedentary",
  label: "יושבני (בקושי זז)",
  mult: 1.2
}, {
  id: "light",
  label: "פעילות קלה (1-3 בשבוע)",
  mult: 1.375
}, {
  id: "moderate",
  label: "פעילות בינונית (3-5 בשבוע)",
  mult: 1.55
}, {
  id: "active",
  label: "פעילות גבוהה (6-7 בשבוע)",
  mult: 1.725
}, {
  id: "very_active",
  label: "פעילות גבוהה מאוד (ספורטאי)",
  mult: 1.9
}];
function calcBMR({
  gender,
  weightKg,
  heightCm,
  age
}) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}
function calcGoals(profile) {
  const activity = ACTIVITY_LEVELS.find(a => a.id === profile.activityLevel) || ACTIVITY_LEVELS[1];
  const bmr = calcBMR(profile);
  const tdee = bmr * activity.mult;
  const floor = profile.gender === "male" ? 1500 : 1200;
  let target = tdee - 500; // ~0.5kg/week deficit
  if (target < floor) target = floor;
  target = Math.round(target / 10) * 10;
  const protein = Math.round(target * 0.3 / 4);
  const carbs = Math.round(target * 0.4 / 4);
  const fat = Math.round(target * 0.3 / 9);
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    calorieGoal: target,
    protein,
    carbs,
    fat
  };
}
function calcBMI(weightKg, heightCm) {
  const h = heightCm / 100;
  return weightKg / (h * h);
}
function bmiLabel(bmi) {
  if (bmi < 18.5) return {
    text: "תת-משקל",
    color: "#4C7EA6"
  };
  if (bmi < 25) return {
    text: "משקל תקין",
    color: "#3B7A57"
  };
  if (bmi < 30) return {
    text: "עודף משקל",
    color: "#D9A441"
  };
  return {
    text: "השמנה",
    color: "#B14C63"
  };
}
const DEFAULT_WORKOUT_PLAN = [{
  day: "ראשון",
  title: "פלג גוף עליון",
  exercises: ["לחיצת חזה", "משיכה עליונה", "כתפיים"],
  done: false
}, {
  day: "שני",
  title: "הליכה / קרדיו קל",
  exercises: ["30 דקות הליכה מהירה"],
  done: false
}, {
  day: "שלישי",
  title: "פלג גוף תחתון",
  exercises: ["סקוואט", "לאנג׳ים", "כפיפות בטן"],
  done: false
}, {
  day: "רביעי",
  title: "מנוחה",
  exercises: ["מתיחות קלות"],
  done: false
}, {
  day: "חמישי",
  title: "פלג גוף עליון",
  exercises: ["מתח / חתירה", "כתפיים", "יד אחורית"],
  done: false
}, {
  day: "שישי",
  title: "קרדיו + core",
  exercises: ["20 דקות אינטרוולים", "פלאנק"],
  done: false
}, {
  day: "שבת",
  title: "מנוחה",
  exercises: ["מנוחה מלאה"],
  done: false
}];
async function generateWorkoutPlan(profile, location, goals) {
  const locationText = {
    home_no_equipment: "בבית, ללא שום ציוד (משקל גוף בלבד)",
    home_basic: "בבית, עם ציוד בסיסי (משקולות יד, גומיות התנגדות)",
    gym: "בחדר כושר מאובזר"
  }[location];
  const activity = ACTIVITY_LEVELS.find(a => a.id === profile.activityLevel);
  const goalsText = goals.join(", ");
  const prompt = `אתה מאמן כושר אישי. בנה תוכנית אימונים שבועית (7 ימים, ראשון עד שבת) עבור מתאמן/ת עם הנתונים הבאים:
מין: ${profile.gender === "male" ? "גבר" : "אישה"}, גיל: ${profile.age}, רמת פעילות נוכחית: ${activity?.label}.
מקום האימון: ${locationText}.
מטרות האימונים: ${goalsText}. התאם את סוגי התרגילים בהתאם - למשל אם המטרה כוללת חיטוב ועיצוב, שלב תרגילי חיזוק וטונוס לגוף מלא (כולל ליבה, ישבן, זרועות) לצד קרדיו; אם המטרה ירידה במשקל, תן דגש גם על קרדיו ושריפת קלוריות.
בצע זאת בצורה בטוחה ובת-קיימא (לא קיצונית), עם ימי מנוחה סבירים.
לכל יום תן כותרת קצרה ורשימה של 3-5 תרגילים קונקרטיים המתאימים למקום האימון שצוין.
החזר אך ורק מערך JSON תקין, בלי שום טקסט נוסף, בפורמט הזה בדיוק:
[{"day": "ראשון", "title": "כותרת קצרה", "exercises": ["תרגיל 1", "תרגיל 2", "תרגיל 3"]}, ... עוד 6 ימים כך שסה"כ 7 אובייקטים]`;
  const response = await fetchWithRetry(API_PROXY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 2000,
      messages: [{
        role: "user",
        content: prompt
      }]
    })
  });
  const data = await response.json();
  const text = (data.content || []).map(b => b.text || "").join("");
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");
  if (start === -1 || end === -1 || end < start) {
    throw new Error("no valid JSON array found in response");
  }
  const clean = text.slice(start, end + 1);
  const days = JSON.parse(clean);
  if (!Array.isArray(days) || days.length === 0) {
    throw new Error("empty or invalid plan");
  }
  return days.map(d => ({
    day: d.day,
    title: d.title,
    exercises: d.exercises,
    done: false
  }));
}
async function suggestRemainingMeal(remaining, mealsSoFar, preferences) {
  const eatenText = mealsSoFar.length > 0 ? `הארוחות שכבר נאכלו היום: ${mealsSoFar.map(m => m.name).join(", ")}.` : "עדיין לא נאכלה שום ארוחה היום.";
  const prefsText = preferences?.trim() ? `העדפות והגבלות: ${preferences.trim()}.` : "";
  const prompt = `אתה דיאטן קליני. לאדם נותרו היום עד סוף היום: ${remaining.calories} קלוריות, ${remaining.protein} גרם חלבון, ${remaining.carbs} גרם פחמימה, ${remaining.fat} גרם שומן.
${eatenText} ${prefsText}
הצע 3 אפשרויות שונות ומגוונות למה שכדאי לאכול עכשיו (ארוחה או חטיף) שיתאימו בערך למה שנותר (לא חייב להיות מדויק, אבל קרוב), תוך התחשבות במה שכבר נאכל (לגיוון, לא לחזור על אותו דבר). לכל אפשרות תן שם קצר וברור בעברית וערכים תזונתיים.
החזר אך ורק מערך JSON תקין, בלי שום טקסט נוסף, בפורמט הזה בדיוק:
[{"name": "שם המנה", "calories": מספר_שלם, "protein": מספר_שלם_בגרם, "carbs": מספר_שלם_בגרם, "fat": מספר_שלם_בגרם}, ... עוד 2 אפשרויות]`;
  const response = await fetchWithRetry(API_PROXY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 800,
      messages: [{
        role: "user",
        content: prompt
      }]
    })
  });
  const data = await response.json();
  const text = (data.content || []).map(b => b.text || "").join("");
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");
  if (start === -1 || end === -1 || end < start) {
    throw new Error("no valid JSON array found in suggestion response");
  }
  const clean = text.slice(start, end + 1);
  const suggestions = JSON.parse(clean);
  if (!Array.isArray(suggestions) || suggestions.length === 0) {
    throw new Error("empty or invalid suggestions");
  }
  return suggestions;
}
 
// ---------- ring component ----------
function Ring({
  size = 160,
  stroke = 14,
  pct,
  color,
  trackColor = "#E7ECE8",
  children
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(1, pct || 0));
  const offset = c * (1 - clamped);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    stroke: trackColor,
    strokeWidth: stroke,
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    stroke: color,
    strokeWidth: stroke,
    fill: "none",
    strokeDasharray: c,
    strokeDashoffset: offset,
    strokeLinecap: "round",
    style: {
      transition: "stroke-dashoffset 0.6s ease"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, children));
}
function MiniRing({
  pct,
  color,
  icon,
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Ring, {
    size: 64,
    stroke: 7,
    pct: pct,
    color: color
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[13px] font-bold",
    style: {
      color: "#172E27"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px]",
    style: {
      color: "#6B8579"
    }
  }, label)));
}
 
// ---------- weight chart (hand-rolled SVG, no chart library) ----------
function WeightChart({
  data
}) {
  const width = 320;
  const height = 180;
  const padL = 34,
    padR = 10,
    padT = 10,
    padB = 24;
  const weights = data.map(d => d.weight);
  const minW = Math.min(...weights) - 1;
  const maxW = Math.max(...weights) + 1;
  const range = maxW - minW || 1;
  const xFor = i => padL + i / (data.length - 1) * (width - padL - padR);
  const yFor = w => padT + (1 - (w - minW) / range) * (height - padT - padB);
  const points = data.map((d, i) => `${xFor(i)},${yFor(d.weight)}`).join(" ");
  const yTicks = [minW, minW + range / 2, maxW];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    height: "200"
  }, yTicks.map((t, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("line", {
    x1: padL,
    x2: width - padR,
    y1: yFor(t),
    y2: yFor(t),
    stroke: "#EAF0EC",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: padL - 6,
    y: yFor(t) + 3,
    fontSize: "9",
    fill: "#6B8579",
    textAnchor: "end"
  }, t.toFixed(0)))), /*#__PURE__*/React.createElement("polyline", {
    points: points,
    fill: "none",
    stroke: "#2F6F52",
    strokeWidth: "2.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), data.map((d, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: xFor(i),
    cy: yFor(d.weight),
    r: "3.5",
    fill: "#2F6F52"
  })), data.map((d, i) => (i === 0 || i === data.length - 1 || data.length <= 5) && /*#__PURE__*/React.createElement("text", {
    key: `label-${i}`,
    x: xFor(i),
    y: height - 6,
    fontSize: "9",
    fill: "#6B8579",
    textAnchor: "middle"
  }, d.date)));
}
 
// ---------- storage wrapper ----------
async function loadKey(key, fallback) {
  try {
    const res = await window.storage.get(key, false);
    return res ? JSON.parse(res.value) : fallback;
  } catch (e) {
    return fallback;
  }
}
async function saveKey(key, value) {
  try {
    await window.storage.set(key, JSON.stringify(value), false);
  } catch (e) {
    console.error("storage set failed", key, e);
  }
}
const FAMILY_MEMBERS = [{
  id: "dad",
  label: "אבא"
}, {
  id: "mom",
  label: "אמא"
}];
function App() {
  const [loading, setLoading] = useState(true);
  const [activeUser, setActiveUser] = useState(null); // 'dad' | 'mom'
  const [tab, setTab] = useState("dashboard");
  const [profile, setProfile] = useState(null);
  const [meals, setMeals] = useState({}); // { 'YYYY-MM-DD': [entries] }
  const [weightLog, setWeightLog] = useState([]); // [{date, weightKg}]
  const [workoutPlan, setWorkoutPlan] = useState(DEFAULT_WORKOUT_PLAN);
  const [workoutHistory, setWorkoutHistory] = useState([]); // [{date, completed, total}]
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [showAddWeight, setShowAddWeight] = useState(false);
 
  // load the last-used family member on first mount
  useEffect(() => {
    (async () => {
      const lastUser = await loadKey("active_user", null);
      if (lastUser) {
        await switchToUser(lastUser);
      } else {
        setLoading(false);
      }
    })();
  }, []);
  const switchToUser = useCallback(async userId => {
    setLoading(true);
    const p = await loadKey(`${userId}_profile`, null);
    const m = await loadKey(`${userId}_meals_all`, {});
    const w = await loadKey(`${userId}_weightLog`, []);
    const wp = await loadKey(`${userId}_workoutPlan`, DEFAULT_WORKOUT_PLAN);
    const wh = await loadKey(`${userId}_workoutHistory`, []);
    setActiveUser(userId);
    setProfile(p);
    setMeals(m);
    setWeightLog(w);
    setWorkoutPlan(wp);
    setWorkoutHistory(wh);
    setTab("dashboard");
    saveKey("active_user", userId);
    if (!p) setShowOnboarding(true);else setShowOnboarding(false);
    setLoading(false);
  }, []);
  const switchUserPicker = useCallback(() => {
    setActiveUser(null);
    saveKey("active_user", null);
  }, []);
  const saveProfile = useCallback(async p => {
    setProfile(p);
    await saveKey(`${activeUser}_profile`, p);
  }, [activeUser]);
  const addMeal = useCallback(async entry => {
    setMeals(prev => {
      const day = todayStr();
      const list = prev[day] ? [...prev[day], entry] : [entry];
      const next = {
        ...prev,
        [day]: list
      };
      saveKey(`${activeUser}_meals_all`, next);
      return next;
    });
  }, [activeUser]);
  const removeMeal = useCallback(async id => {
    setMeals(prev => {
      const day = todayStr();
      const list = (prev[day] || []).filter(m => m.id !== id);
      const next = {
        ...prev,
        [day]: list
      };
      saveKey(`${activeUser}_meals_all`, next);
      return next;
    });
  }, [activeUser]);
  const updateMeal = useCallback(async updatedEntry => {
    setMeals(prev => {
      const day = todayStr();
      const list = (prev[day] || []).map(m => m.id === updatedEntry.id ? updatedEntry : m);
      const next = {
        ...prev,
        [day]: list
      };
      saveKey(`${activeUser}_meals_all`, next);
      return next;
    });
  }, [activeUser]);
  const addMeals = useCallback(async entries => {
    setMeals(prev => {
      const day = todayStr();
      const withIds = entries.map((e, i) => ({
        ...e,
        id: `${Date.now()}_${i}`
      }));
      const list = prev[day] ? [...prev[day], ...withIds] : withIds;
      const next = {
        ...prev,
        [day]: list
      };
      saveKey(`${activeUser}_meals_all`, next);
      return next;
    });
  }, [activeUser]);
  const addWeight = useCallback(async weightKg => {
    setWeightLog(prev => {
      const entry = {
        date: todayStr(),
        weightKg
      };
      const withoutToday = prev.filter(e => e.date !== todayStr());
      const next = [...withoutToday, entry].sort((a, b) => a.date.localeCompare(b.date));
      saveKey(`${activeUser}_weightLog`, next);
      return next;
    });
    if (profile) {
      const updated = {
        ...profile,
        weightKg
      };
      saveProfile(updated);
    }
  }, [profile, saveProfile, activeUser]);
  const addDemoWeightData = useCallback(() => {
    const base = profile?.weightKg || 75;
    const days = [10, 7, 4, 2];
    const demoEntries = days.map((offset, i) => {
      const d = new Date();
      d.setDate(d.getDate() - offset);
      return {
        date: d.toISOString().slice(0, 10),
        weightKg: Math.round((base + (days.length - i) * 0.4) * 10) / 10
      };
    });
    setWeightLog(prev => {
      const existingDates = new Set(prev.map(e => e.date));
      const merged = [...prev, ...demoEntries.filter(e => !existingDates.has(e.date))].sort((a, b) => a.date.localeCompare(b.date));
      saveKey(`${activeUser}_weightLog`, merged);
      return merged;
    });
  }, [profile, activeUser]);
  const toggleWorkoutDone = useCallback(idx => {
    setWorkoutPlan(prev => {
      const next = prev.map((d, i) => i === idx ? {
        ...d,
        done: !d.done
      } : d);
      saveKey(`${activeUser}_workoutPlan`, next);
      return next;
    });
  }, [activeUser]);
  const editWorkoutDay = useCallback((idx, title, exercises) => {
    setWorkoutPlan(prev => {
      const next = prev.map((d, i) => i === idx ? {
        ...d,
        title,
        exercises
      } : d);
      saveKey(`${activeUser}_workoutPlan`, next);
      return next;
    });
  }, [activeUser]);
  const endWorkoutWeek = useCallback(() => {
    setWorkoutPlan(prevPlan => {
      const completed = prevPlan.filter(d => d.done).length;
      const total = prevPlan.length;
      setWorkoutHistory(prevHistory => {
        const nextHistory = [...prevHistory, {
          date: todayStr(),
          completed,
          total
        }];
        saveKey(`${activeUser}_workoutHistory`, nextHistory);
        return nextHistory;
      });
      const resetPlan = prevPlan.map(d => ({
        ...d,
        done: false
      }));
      saveKey(`${activeUser}_workoutPlan`, resetPlan);
      return resetPlan;
    });
  }, [activeUser]);
  const applyGeneratedPlan = useCallback(newPlan => {
    setWorkoutPlan(newPlan);
    saveKey(`${activeUser}_workoutPlan`, newPlan);
  }, [activeUser]);
  if (loading) {
    return /*#__PURE__*/React.createElement("div", {
      dir: "rtl",
      className: "min-h-screen flex items-center justify-center",
      style: {
        background: "#F4F7F4"
      }
    }, /*#__PURE__*/React.createElement(Loader2, {
      className: "animate-spin",
      size: 28,
      color: "#3B7A57"
    }));
  }
  if (!activeUser) {
    return /*#__PURE__*/React.createElement("div", {
      dir: "rtl",
      className: "min-h-screen flex items-center justify-center",
      style: {
        background: "#E9ECE7",
        fontFamily: "'Assistant', sans-serif"
      }
    }, /*#__PURE__*/React.createElement("style", null, `@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;600;700;800&family=Assistant:wght@400;500;600;700&display=swap'); .disp{font-family:'Rubik',sans-serif;}`), /*#__PURE__*/React.createElement("div", {
      className: "relative w-full flex flex-col items-center justify-center px-8",
      style: {
        maxWidth: 420,
        height: "100vh",
        maxHeight: 860,
        background: "#F4F7F4",
        boxShadow: "0 20px 60px rgba(23,46,39,0.25)"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "disp text-2xl font-bold mb-1 text-center",
      style: {
        color: "#172E27"
      }
    }, "מי משתמש עכשיו?"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm mb-8 text-center",
      style: {
        color: "#6B8579"
      }
    }, "כל אחד רואה רק את הנתונים שלו"), /*#__PURE__*/React.createElement("div", {
      className: "w-full space-y-3"
    }, FAMILY_MEMBERS.map(u => /*#__PURE__*/React.createElement("button", {
      key: u.id,
      onClick: () => switchToUser(u.id),
      className: "w-full py-5 rounded-2xl disp font-bold text-lg border-2 flex items-center justify-center gap-3",
      style: {
        borderColor: "#DCE4DE",
        background: "#FFFFFF",
        color: "#172E27"
      }
    }, /*#__PURE__*/React.createElement(User, {
      size: 20,
      color: "#2F6F52"
    }), " ", u.label)))));
  }
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    className: "min-h-screen flex items-center justify-center",
    style: {
      background: "#E9ECE7",
      fontFamily: "'Assistant', sans-serif"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;600;700;800&family=Assistant:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .disp { font-family: 'Rubik', sans-serif; }
        ::-webkit-scrollbar { width: 0px; }
      `), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full",
    style: {
      maxWidth: 420,
      height: "100vh",
      maxHeight: 860,
      background: "#F4F7F4",
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(23,46,39,0.25)"
    }
  }, showOnboarding && /*#__PURE__*/React.createElement(Onboarding, {
    onComplete: p => {
      saveProfile(p);
      setShowOnboarding(false);
    }
  }), !showOnboarding && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "h-full overflow-y-auto pb-24",
    style: {
      scrollbarWidth: "none"
    }
  }, tab === "dashboard" && /*#__PURE__*/React.createElement(Dashboard, {
    profile: profile,
    meals: meals[todayStr()] || [],
    weightLog: weightLog,
    onAddMeal: () => setShowAddMeal(true),
    activeUser: activeUser,
    onQuickAdd: addMeal
  }), tab === "food" && /*#__PURE__*/React.createElement(FoodDiary, {
    meals: meals[todayStr()] || [],
    profile: profile,
    onAdd: () => setShowAddMeal(true),
    onRemove: removeMeal,
    onUpdate: updateMeal,
    onBulkAdd: addMeals
  }), tab === "workouts" && /*#__PURE__*/React.createElement(Workouts, {
    plan: workoutPlan,
    onToggle: toggleWorkoutDone,
    history: workoutHistory,
    onEditDay: editWorkoutDay,
    onEndWeek: endWorkoutWeek,
    profile: profile,
    onApplyPlan: applyGeneratedPlan
  }), tab === "weight" && /*#__PURE__*/React.createElement(WeightTab, {
    weightLog: weightLog,
    profile: profile,
    onAdd: () => setShowAddWeight(true),
    onLoadDemo: addDemoWeightData
  }), tab === "profile" && /*#__PURE__*/React.createElement(ProfileTab, {
    profile: profile,
    onSave: saveProfile,
    activeUser: activeUser,
    onSwitchUser: switchUserPicker
  })), /*#__PURE__*/React.createElement(BottomNav, {
    tab: tab,
    setTab: setTab
  }), showAddMeal && /*#__PURE__*/React.createElement(AddMealModal, {
    onClose: () => setShowAddMeal(false),
    onSave: m => {
      addMeal(m);
      setShowAddMeal(false);
    }
  }), showAddWeight && /*#__PURE__*/React.createElement(AddWeightModal, {
    current: profile?.weightKg,
    onClose: () => setShowAddWeight(false),
    onSave: w => {
      addWeight(w);
      setShowAddWeight(false);
    }
  }))));
}
 
// ---------- Onboarding ----------
function Onboarding({
  onComplete
}) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    gender: "female",
    age: "",
    heightCm: "",
    weightKg: "",
    activityLevel: "light"
  });
  const canNext = () => {
    if (step === 0) return form.gender;
    if (step === 1) return form.age && form.heightCm && form.weightKg;
    if (step === 2) return form.activityLevel;
    return true;
  };
  const finish = () => {
    onComplete({
      gender: form.gender,
      age: Number(form.age),
      heightCm: Number(form.heightCm),
      weightKg: Number(form.weightKg),
      activityLevel: form.activityLevel
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "h-full flex flex-col p-6",
    style: {
      background: "#F4F7F4"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5 mb-8 mt-2"
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "h-1.5 flex-1 rounded-full",
    style: {
      background: i <= step ? "#3B7A57" : "#DCE4DE"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "disp text-2xl font-bold mb-1",
    style: {
      color: "#172E27"
    }
  }, "בואי נכיר אותך"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm mb-6",
    style: {
      color: "#6B8579"
    }
  }, "זה עוזר לחשב את היעד היומי שלך במדויק"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, [{
    id: "female",
    label: "אישה"
  }, {
    id: "male",
    label: "גבר"
  }].map(g => /*#__PURE__*/React.createElement("button", {
    key: g.id,
    onClick: () => setForm({
      ...form,
      gender: g.id
    }),
    className: "py-4 rounded-2xl text-sm font-semibold border-2 transition",
    style: {
      borderColor: form.gender === g.id ? "#3B7A57" : "#DCE4DE",
      background: form.gender === g.id ? "#EAF3EC" : "#FFF",
      color: "#172E27"
    }
  }, g.label)))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "disp text-2xl font-bold mb-1",
    style: {
      color: "#172E27"
    }
  }, "הנתונים שלך"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm mb-6",
    style: {
      color: "#6B8579"
    }
  }, "גיל, גובה ומשקל נוכחי"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement(LabeledInput, {
    label: "גיל",
    unit: "שנים",
    value: form.age,
    onChange: v => setForm({
      ...form,
      age: v
    })
  }), /*#__PURE__*/React.createElement(LabeledInput, {
    label: "גובה",
    unit: "ס״מ",
    value: form.heightCm,
    onChange: v => setForm({
      ...form,
      heightCm: v
    })
  }), /*#__PURE__*/React.createElement(LabeledInput, {
    label: "משקל נוכחי",
    unit: "ק״ג",
    value: form.weightKg,
    onChange: v => setForm({
      ...form,
      weightKg: v
    })
  }))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "disp text-2xl font-bold mb-1",
    style: {
      color: "#172E27"
    }
  }, "רמת הפעילות שלך"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm mb-6",
    style: {
      color: "#6B8579"
    }
  }, "כמה את/ה זז/ה בשבוע רגיל"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5"
  }, ACTIVITY_LEVELS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.id,
    onClick: () => setForm({
      ...form,
      activityLevel: a.id
    }),
    className: "w-full text-right py-3.5 px-4 rounded-2xl text-sm font-medium border-2 transition",
    style: {
      borderColor: form.activityLevel === a.id ? "#3B7A57" : "#DCE4DE",
      background: form.activityLevel === a.id ? "#EAF3EC" : "#FFF",
      color: "#172E27"
    }
  }, a.label))))), /*#__PURE__*/React.createElement("button", {
    disabled: !canNext(),
    onClick: () => step < 2 ? setStep(step + 1) : finish(),
    className: "w-full py-4 rounded-2xl disp font-bold text-white flex items-center justify-center gap-2 mt-4",
    style: {
      background: canNext() ? "#2F6F52" : "#B7C6BD"
    }
  }, step < 2 ? "המשך" : "סיימתי, בואו נתחיל", " ", /*#__PURE__*/React.createElement(ChevronRight, {
    size: 18,
    style: {
      transform: "scaleX(-1)"
    }
  })));
}
function LabeledInput({
  label,
  unit,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold mb-1.5 block",
    style: {
      color: "#6B8579"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center rounded-2xl border-2 px-4",
    style: {
      borderColor: "#DCE4DE",
      background: "#FFF"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    onChange: e => onChange(e.target.value),
    className: "flex-1 py-3.5 outline-none text-lg font-semibold bg-transparent",
    style: {
      color: "#172E27"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-medium",
    style: {
      color: "#9CB0A5"
    }
  }, unit)));
}
 
// ---------- Dashboard ----------
function Dashboard({
  profile,
  meals,
  weightLog,
  onAddMeal,
  activeUser,
  onQuickAdd
}) {
  const goals = profile ? calcGoals(profile) : null;
  const activeLabel = FAMILY_MEMBERS.find(u => u.id === activeUser)?.label || "";
  const [showSuggest, setShowSuggest] = useState(false);
  const totals = meals.reduce((acc, m) => ({
    calories: acc.calories + m.calories,
    protein: acc.protein + m.protein,
    carbs: acc.carbs + m.carbs,
    fat: acc.fat + m.fat
  }), {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  });
  const lastWeight = weightLog[weightLog.length - 1]?.weightKg ?? profile?.weightKg;
  const prevWeight = weightLog.length > 1 ? weightLog[weightLog.length - 2].weightKg : null;
  const delta = prevWeight != null ? lastWeight - prevWeight : null;
  const firstWeight = weightLog.length > 0 ? weightLog[0].weightKg : profile?.weightKg;
  const totalDelta = weightLog.length > 1 && firstWeight != null ? lastWeight - firstWeight : null;
  const caloriesLeft = goals ? Math.max(0, goals.calorieGoal - totals.calories) : 0;
  const pct = goals ? totals.calories / goals.calorieGoal : 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "px-5 pt-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-medium",
    style: {
      color: "#6B8579"
    }
  }, fmtDateHe(new Date())), /*#__PURE__*/React.createElement("h1", {
    className: "disp text-xl font-bold",
    style: {
      color: "#172E27"
    }
  }, "הדשבורד היומי של ", activeLabel)), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-6 mb-5",
    style: {
      background: "#FFFFFF",
      boxShadow: "0 4px 24px rgba(23,46,39,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mb-5"
  }, /*#__PURE__*/React.createElement(Ring, {
    size: 172,
    stroke: 16,
    pct: pct,
    color: pct > 1 ? "#B14C63" : "#2F6F52"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "disp text-3xl font-extrabold",
    style: {
      color: "#172E27"
    }
  }, caloriesLeft), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-medium",
    style: {
      color: "#6B8579"
    }
  }, "קלוריות נותרו")))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-around"
  }, /*#__PURE__*/React.createElement(MiniRing, {
    pct: goals ? totals.protein / goals.protein : 0,
    color: "#B14C63",
    icon: /*#__PURE__*/React.createElement(Beef, {
      size: 20
    }),
    value: `${totals.protein}/${goals?.protein ?? 0}`,
    label: "חלבון"
  }), /*#__PURE__*/React.createElement(MiniRing, {
    pct: goals ? totals.carbs / goals.carbs : 0,
    color: "#D9A441",
    icon: /*#__PURE__*/React.createElement(Wheat, {
      size: 20
    }),
    value: `${totals.carbs}/${goals?.carbs ?? 0}`,
    label: "פחמימה"
  }), /*#__PURE__*/React.createElement(MiniRing, {
    pct: goals ? totals.fat / goals.fat : 0,
    color: "#4C7EA6",
    icon: /*#__PURE__*/React.createElement(Droplet, {
      size: 20
    }),
    value: `${totals.fat}/${goals?.fat ?? 0}`,
    label: "שומן"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowSuggest(true),
    disabled: !goals,
    className: "w-full py-3 rounded-2xl disp font-bold text-sm mb-3 flex items-center justify-center gap-2",
    style: {
      background: "#FEF3E2",
      color: "#D9A441"
    }
  }, /*#__PURE__*/React.createElement(Flame, {
    size: 15
  }), " מה כדאי לאכול עכשיו?"), /*#__PURE__*/React.createElement("button", {
    onClick: onAddMeal,
    className: "w-full py-3.5 rounded-2xl disp font-bold text-white flex items-center justify-center gap-2 mb-5",
    style: {
      background: "#2F6F52"
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 18
  }), " הוספת ארוחה"), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-5",
    style: {
      background: "#FFFFFF",
      boxShadow: "0 4px 24px rgba(23,46,39,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-medium mb-1",
    style: {
      color: "#6B8579"
    }
  }, "משקל אחרון"), /*#__PURE__*/React.createElement("div", {
    className: "disp text-2xl font-extrabold",
    style: {
      color: "#172E27"
    }
  }, lastWeight ? `${lastWeight} ק״ג` : "—")), delta != null && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold",
    style: {
      background: delta <= 0 ? "#EAF3EC" : "#FBEAEE",
      color: delta <= 0 ? "#2F6F52" : "#B14C63"
    }
  }, delta <= 0 ? /*#__PURE__*/React.createElement(TrendingDown, {
    size: 14
  }) : /*#__PURE__*/React.createElement(TrendingUp, {
    size: 14
  }), Math.abs(delta).toFixed(1), " ק״ג")), totalDelta != null && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mt-3 pt-3",
    style: {
      borderTop: "1px solid #EAF0EC"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-medium",
    style: {
      color: "#6B8579"
    }
  }, "סה״כ מתחילת המעקב"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold flex items-center gap-1",
    style: {
      color: totalDelta <= 0 ? "#2F6F52" : "#B14C63"
    }
  }, totalDelta <= 0 ? /*#__PURE__*/React.createElement(TrendingDown, {
    size: 13
  }) : /*#__PURE__*/React.createElement(TrendingUp, {
    size: 13
  }), Math.abs(totalDelta).toFixed(1), " ק״ג"))), showSuggest && goals && /*#__PURE__*/React.createElement(SuggestMealModal, {
    remaining: {
      calories: Math.max(0, goals.calorieGoal - totals.calories),
      protein: Math.max(0, goals.protein - totals.protein),
      carbs: Math.max(0, goals.carbs - totals.carbs),
      fat: Math.max(0, goals.fat - totals.fat)
    },
    mealsSoFar: meals,
    onClose: () => setShowSuggest(false),
    onAdd: entry => {
      onQuickAdd(entry);
      setShowSuggest(false);
    }
  }));
}
function SuggestMealModal({
  remaining,
  mealsSoFar,
  onClose,
  onAdd
}) {
  const [preferences, setPreferences] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const generate = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await suggestRemainingMeal(remaining, mealsSoFar, preferences);
      setSuggestions(result);
    } catch (e) {
      console.error("meal suggestion failed:", e);
      setError(true);
    }
    setLoading(false);
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: "מה כדאי לאכול עכשיו?",
    onClose: onClose
  }, !suggestions && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-4 mb-4",
    style: {
      background: "#F4F7F4"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold mb-1",
    style: {
      color: "#6B8579"
    }
  }, "נותר לך היום"), /*#__PURE__*/React.createElement("p", {
    className: "disp text-lg font-extrabold",
    style: {
      color: "#172E27"
    }
  }, remaining.calories, " קלוריות"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] mt-0.5",
    style: {
      color: "#6B8579"
    }
  }, "חלבון ", remaining.protein, " · פחמימה ", remaining.carbs, " · שומן ", remaining.fat)), /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold mb-1.5 block",
    style: {
      color: "#6B8579"
    }
  }, "העדפות (אופציונלי)"), /*#__PURE__*/React.createElement("textarea", {
    value: preferences,
    onChange: e => setPreferences(e.target.value),
    rows: 2,
    placeholder: "לדוגמה: משהו קל, בלי בשר",
    className: "w-full py-3 px-4 rounded-2xl border-2 outline-none text-sm font-medium bg-white resize-none mb-4",
    style: {
      borderColor: "#DCE4DE",
      color: "#172E27"
    }
  }), error && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] mb-3",
    style: {
      color: "#B14C63"
    }
  }, "לא הצלחתי להציע - נסי שוב."), /*#__PURE__*/React.createElement("button", {
    onClick: generate,
    disabled: loading,
    className: "w-full py-3.5 rounded-2xl disp font-bold text-white flex items-center justify-center gap-2",
    style: {
      background: loading ? "#B7C6BD" : "#2F6F52"
    }
  }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Loader2, {
    size: 16,
    className: "animate-spin"
  }), " חושב על זה...") : "הצעת אפשרויות")), suggestions && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5"
  }, suggestions.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rounded-2xl p-3.5 flex items-center justify-between",
    style: {
      background: "#FFFFFF",
      border: "1px solid #EAF0EC"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm mb-1",
    style: {
      color: "#172E27"
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 text-[11px]",
    style: {
      color: "#6B8579"
    }
  }, /*#__PURE__*/React.createElement("span", null, s.calories, " קק״ל"), /*#__PURE__*/React.createElement("span", null, "ח ", s.protein), /*#__PURE__*/React.createElement("span", null, "פ ", s.carbs), /*#__PURE__*/React.createElement("span", null, "ש ", s.fat))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onAdd({
      id: Date.now().toString(),
      name: s.name,
      calories: s.calories,
      protein: s.protein,
      carbs: s.carbs,
      fat: s.fat
    }),
    className: "w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0",
    style: {
      background: "#2F6F52"
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 16
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSuggestions(null),
    className: "w-full py-3 rounded-2xl disp font-bold text-sm mt-1",
    style: {
      background: "#F4F7F4",
      color: "#6B8579"
    }
  }, "הצעות אחרות")));
}
 
// ---------- Food Diary ----------
async function generateDailyMenu(profile, goals, preferences) {
  const prefsText = preferences?.trim() ? `העדפות והגבלות נוספות: ${preferences.trim()}.` : "אין העדפות מיוחדות.";
  const prompt = `אתה דיאטן קליני. בנה תפריט יומי מוצע (ארוחת בוקר, ארוחת צהריים, ארוחת ערב, וחטיף אחד) עבור אדם עם יעד יומי של ${goals.calorieGoal} קלוריות, ${goals.protein} גרם חלבון, ${goals.carbs} גרם פחמימה, ${goals.fat} גרם שומן.
${prefsText}
תן ארוחות מציאותיות ופשוטות להכנה, מגוונות, כך שסך הכל של כל הארוחות יתקרב ליעד היומי (סטייה של עד כ-5% מקובלת).
לכל ארוחה תן שם ברור וקצר בעברית (כולל המרכיבים העיקריים בתוך השם, למשל "חזה עוף בגריל עם קינואה וירקות"), וערכים תזונתיים.
החזר אך ורק מערך JSON תקין, בלי שום טקסט נוסף, בפורמט הזה בדיוק:
[{"mealType": "ארוחת בוקר", "name": "שם הארוחה", "calories": מספר_שלם, "protein": מספר_שלם_בגרם, "carbs": מספר_שלם_בגרם, "fat": מספר_שלם_בגרם}, ... עוד 3 ארוחות: ארוחת צהריים, ארוחת ערב, חטיף]`;
  const response = await fetchWithRetry(API_PROXY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1200,
      messages: [{
        role: "user",
        content: prompt
      }]
    })
  });
  const data = await response.json();
  const text = (data.content || []).map(b => b.text || "").join("");
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");
  if (start === -1 || end === -1 || end < start) {
    throw new Error("no valid JSON array found in menu response");
  }
  const clean = text.slice(start, end + 1);
  const meals = JSON.parse(clean);
  if (!Array.isArray(meals) || meals.length === 0) {
    throw new Error("empty or invalid menu");
  }
  return meals;
}
function FoodDiary({
  meals,
  profile,
  onAdd,
  onRemove,
  onUpdate,
  onBulkAdd
}) {
  const goals = profile ? calcGoals(profile) : null;
  const totalCal = meals.reduce((s, m) => s + m.calories, 0);
  const [editingMeal, setEditingMeal] = useState(null);
  const [showDailyMenu, setShowDailyMenu] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "px-5 pt-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "disp text-xl font-bold",
    style: {
      color: "#172E27"
    }
  }, "יומן תזונה"), /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    className: "w-9 h-9 rounded-full flex items-center justify-center text-white",
    style: {
      background: "#2F6F52"
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 18
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowDailyMenu(true),
    className: "w-full py-3 rounded-2xl disp font-bold text-sm mb-4 flex items-center justify-center gap-2",
    style: {
      background: "#EAF3EC",
      color: "#2F6F52"
    }
  }, /*#__PURE__*/React.createElement(Utensils, {
    size: 15
  }), " הצעת תפריט יומי מלא"), goals && /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-4 mb-4 flex items-center justify-between",
    style: {
      background: "#EAF3EC"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-semibold",
    style: {
      color: "#2F6F52"
    }
  }, "סה״כ היום"), /*#__PURE__*/React.createElement("span", {
    className: "disp font-bold",
    style: {
      color: "#172E27"
    }
  }, totalCal, " / ", goals.calorieGoal, " קלוריות")), meals.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "text-center py-16"
  }, /*#__PURE__*/React.createElement(Utensils, {
    size: 32,
    color: "#B7C6BD",
    className: "mx-auto mb-3"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-sm",
    style: {
      color: "#9CB0A5"
    }
  }, "עוד לא הוספת ארוחות היום")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5"
  }, meals.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    className: "rounded-2xl p-4 flex items-center justify-between",
    style: {
      background: "#FFFFFF",
      boxShadow: "0 2px 12px rgba(23,46,39,0.05)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditingMeal(m),
    className: "flex-1 text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm mb-1",
    style: {
      color: "#172E27"
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 text-[11px]",
    style: {
      color: "#6B8579"
    }
  }, /*#__PURE__*/React.createElement("span", null, m.calories, " קק״ל"), /*#__PURE__*/React.createElement("span", null, "ח ", m.protein), /*#__PURE__*/React.createElement("span", null, "פ ", m.carbs), /*#__PURE__*/React.createElement("span", null, "ש ", m.fat))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(m.id),
    className: "w-8 h-8 flex items-center justify-center rounded-full",
    style: {
      color: "#B14C63"
    }
  }, /*#__PURE__*/React.createElement(Trash2, {
    size: 16
  }))))), editingMeal && /*#__PURE__*/React.createElement(AddMealModal, {
    initialMeal: editingMeal,
    onClose: () => setEditingMeal(null),
    onSave: updated => {
      onUpdate(updated);
      setEditingMeal(null);
    }
  }), showDailyMenu && /*#__PURE__*/React.createElement(DailyMenuModal, {
    profile: profile,
    goals: goals,
    onClose: () => setShowDailyMenu(false),
    onAddAll: entries => {
      onBulkAdd(entries);
      setShowDailyMenu(false);
    }
  }));
}
function DailyMenuModal({
  profile,
  goals,
  onClose,
  onAddAll
}) {
  const [preferences, setPreferences] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [menu, setMenu] = useState(null);
  const generate = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await generateDailyMenu(profile, goals, preferences);
      setMenu(result);
    } catch (e) {
      console.error("daily menu generation failed:", e);
      setError(true);
    }
    setLoading(false);
  };
  const totals = menu ? menu.reduce((acc, m) => ({
    calories: acc.calories + (m.calories || 0),
    protein: acc.protein + (m.protein || 0),
    carbs: acc.carbs + (m.carbs || 0),
    fat: acc.fat + (m.fat || 0)
  }), {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  }) : null;
  return /*#__PURE__*/React.createElement(Modal, {
    title: "הצעת תפריט יומי",
    onClose: onClose
  }, !menu && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs mb-4",
    style: {
      color: "#6B8579"
    }
  }, "התפריט ייבנה כך שיתקרב ליעד היומי שלך (", goals?.calorieGoal, " קלוריות)."), /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold mb-1.5 block",
    style: {
      color: "#6B8579"
    }
  }, "העדפות או הגבלות תזונתיות (אופציונלי)"), /*#__PURE__*/React.createElement("textarea", {
    value: preferences,
    onChange: e => setPreferences(e.target.value),
    rows: 3,
    placeholder: "לדוגמה: לא אוכלת הרבה בשר אדום, מעדיפה עוף, אשמח גם לתחליפי חלבון מהצומח",
    className: "w-full py-3 px-4 rounded-2xl border-2 outline-none text-sm font-medium bg-white resize-none mb-4",
    style: {
      borderColor: "#DCE4DE",
      color: "#172E27"
    }
  }), error && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] mb-3",
    style: {
      color: "#B14C63"
    }
  }, "לא הצלחתי לבנות תפריט - נסי שוב."), /*#__PURE__*/React.createElement("button", {
    onClick: generate,
    disabled: loading,
    className: "w-full py-3.5 rounded-2xl disp font-bold text-white flex items-center justify-center gap-2",
    style: {
      background: loading ? "#B7C6BD" : "#2F6F52"
    }
  }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Loader2, {
    size: 16,
    className: "animate-spin"
  }), " בונה תפריט...") : "בניית התפריט")), menu && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5 mb-4"
  }, menu.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rounded-2xl p-3.5",
    style: {
      background: "#FFFFFF",
      border: "1px solid #EAF0EC"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-bold mb-0.5",
    style: {
      color: "#2F6F52"
    }
  }, m.mealType), /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm mb-1",
    style: {
      color: "#172E27"
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 text-[11px]",
    style: {
      color: "#6B8579"
    }
  }, /*#__PURE__*/React.createElement("span", null, m.calories, " קק״ל"), /*#__PURE__*/React.createElement("span", null, "ח ", m.protein), /*#__PURE__*/React.createElement("span", null, "פ ", m.carbs), /*#__PURE__*/React.createElement("span", null, "ש ", m.fat))))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-4 mb-4 flex items-center justify-between",
    style: {
      background: "#EAF3EC"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold",
    style: {
      color: "#2F6F52"
    }
  }, "סה״כ תפריט"), /*#__PURE__*/React.createElement("span", {
    className: "disp font-bold text-sm",
    style: {
      color: "#172E27"
    }
  }, totals.calories, " / ", goals?.calorieGoal, " קלוריות")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenu(null),
    className: "flex-1 py-3 rounded-2xl disp font-bold text-sm",
    style: {
      background: "#F4F7F4",
      color: "#6B8579"
    }
  }, "תפריט אחר"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onAddAll(menu.map(m => ({
      name: `${m.mealType}: ${m.name}`,
      calories: m.calories,
      protein: m.protein,
      carbs: m.carbs,
      fat: m.fat
    }))),
    className: "flex-1 py-3 rounded-2xl disp font-bold text-sm text-white",
    style: {
      background: "#2F6F52"
    }
  }, "הוספת הכל ליומן"))));
}
async function estimateNutrition(description) {
  const prompt = `אתה מומחה תזונה. המשתמש מתאר ארוחה או מאכל/משקה שהוא אכל/שתה: "${description}"
אם המשתמש ציין כמות מפורשת (למשל "300 גרם", "2 כוסות", "3 יחידות", "פרוסה אחת") - חשב לפי הכמות המדויקת הזו, לא לפי מנה טיפוסית.
אם לא צוינה כמות בכלל - הערך לפי מנה טיפוסית ורגילה (לא ענקית ולא זעירה).
אם התיאור כולל כמה מרכיבים שונים (למשל "פסטה עם קינואה וטבולה") - פרק לכמה מרכיבים נפרדים במערך components, ולא תמרכיב אחד כללי, אלא אם זה באמת פריט אחד בודד.
לכל מרכיב תן שם קצר בעברית, הערכת משקל בגרמים, וערכים תזונתיים לאותה כמות. גם תן שם כללי קצר לכל הארוחה.
החזר אך ורק אובייקט JSON תקין, בלי שום טקסט נוסף, בפורמט הזה בדיוק:
{"name": "שם כללי קצר לארוחה", "components": [{"name": "שם המרכיב", "estimatedGrams": מספר_שלם_בגרם, "calories": מספר_שלם, "protein": מספר_שלם_בגרם, "carbs": מספר_שלם_בגרם, "fat": מספר_שלם_בגרם}, ...עוד מרכיבים אם רלוונטי]}`;
  const response = await fetchWithRetry(API_PROXY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 600,
      messages: [{
        role: "user",
        content: prompt
      }]
    })
  });
  const data = await response.json();
  const text = (data.content || []).map(b => b.text || "").join("");
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end < start) {
    throw new Error("no valid JSON object found in response");
  }
  const clean = text.slice(start, end + 1);
  return JSON.parse(clean);
}
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = () => reject(new Error("קריאת הקובץ נכשלה"));
    reader.readAsDataURL(file);
  });
}
async function estimateNutritionFromImage(base64Data, mediaType) {
  const prompt = `הסתכל בתמונה של הארוחה/המזון הזו. יש לזהות את כל המרכיבים הנפרדים בצלחת (למשל: פסטה, קינואה, טבולה, קרוטונים - כל אחד בנפרד), ולא לאחד הכל למרכיב אחד כללי, אלא אם באמת מדובר בפריט אחד.
לכל מרכיב תן שם קצר בעברית, הערכת כמות/משקל (בגרמים, לפי מה שנראה בתמונה), וערכים תזונתיים לאותה כמות.
גם תן שם כללי קצר לכל הארוחה (למשל "צלחת פסטה עם טבולה וקרוטונים").
החזר אך ורק אובייקט JSON תקין, בלי שום טקסט נוסף, בפורמט הזה בדיוק:
{"name": "שם כללי קצר לארוחה", "components": [{"name": "שם המרכיב", "estimatedGrams": מספר_שלם_בגרם, "calories": מספר_שלם, "protein": מספר_שלם_בגרם, "carbs": מספר_שלם_בגרם, "fat": מספר_שלם_בגרם}, ...עוד מרכיבים]}`;
  const response = await fetchWithRetry(API_PROXY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1200,
      messages: [{
        role: "user",
        content: [{
          type: "image",
          source: {
            type: "base64",
            media_type: mediaType,
            data: base64Data
          }
        }, {
          type: "text",
          text: prompt
        }]
      }]
    })
  });
  const data = await response.json();
  const text = (data.content || []).map(b => b.text || "").join("");
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end < start) {
    throw new Error("no valid JSON object found in image response");
  }
  const clean = text.slice(start, end + 1);
  return JSON.parse(clean);
}
function openNutritionSearch(query) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(query + " ערכים תזונתיים קלוריות")}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
function AddMealModal({
  onClose,
  onSave,
  initialMeal
}) {
  const isEditing = !!initialMeal;
  const [description, setDescription] = useState("");
  const [form, setForm] = useState(initialMeal ? {
    name: initialMeal.name,
    calories: String(initialMeal.calories),
    protein: String(initialMeal.protein),
    carbs: String(initialMeal.carbs),
    fat: String(initialMeal.fat)
  } : {
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: ""
  });
  const [estimating, setEstimating] = useState(false);
  const [estimateError, setEstimateError] = useState(false);
  const [wasEstimated, setWasEstimated] = useState(!!initialMeal?.components?.length);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [estimatingPhoto, setEstimatingPhoto] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const [estimatedGrams, setEstimatedGrams] = useState(initialMeal?.estimatedGrams ?? null);
  const [components, setComponents] = useState(initialMeal?.components ?? []);
  const [excludedIdx, setExcludedIdx] = useState(new Set());
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [newCompName, setNewCompName] = useState("");
  const [addingComponent, setAddingComponent] = useState(false);
  const [addComponentError, setAddComponentError] = useState(false);
  const [editingCompIdx, setEditingCompIdx] = useState(null);
  const [manualMode, setManualMode] = useState(isEditing);
  const finalStage = wasEstimated || manualMode;
  const handlePhotoSelect = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
    setPhotoError(false);
  };
  const runPhotoEstimate = async () => {
    if (!photoFile) return;
    setEstimatingPhoto(true);
    setPhotoError(false);
    try {
      const base64 = await fileToBase64(photoFile);
      const result = await estimateNutritionFromImage(base64, photoFile.type || "image/jpeg");
      const comps = Array.isArray(result.components) ? result.components : [];
      setComponents(comps);
      setExcludedIdx(new Set());
      applyComponentsSum(comps, new Set(), result.name);
      setWasEstimated(true);
    } catch (e) {
      console.error("photo nutrition estimate failed:", e);
      setPhotoError(true);
    }
    setEstimatingPhoto(false);
  };
  const applyComponentsSum = (comps, excluded, overallName) => {
    const included = comps.filter((_, i) => !excluded.has(i));
    const sum = included.reduce((acc, c) => ({
      calories: acc.calories + (c.calories || 0),
      protein: acc.protein + (c.protein || 0),
      carbs: acc.carbs + (c.carbs || 0),
      fat: acc.fat + (c.fat || 0),
      grams: acc.grams + (c.estimatedGrams || 0)
    }), {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      grams: 0
    });
    setForm({
      name: overallName || form.name,
      calories: String(sum.calories),
      protein: String(sum.protein),
      carbs: String(sum.carbs),
      fat: String(sum.fat)
    });
    setEstimatedGrams(sum.grams);
  };
  const toggleComponent = idx => {
    setExcludedIdx(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);else next.add(idx);
      applyComponentsSum(components, next, form.name);
      return next;
    });
  };
  const updateComponent = (idx, updated) => {
    const nextComponents = components.map((c, i) => i === idx ? updated : c);
    setComponents(nextComponents);
    applyComponentsSum(nextComponents, excludedIdx, form.name);
    setEditingCompIdx(null);
  };
  const addMissingComponent = async () => {
    if (!newCompName.trim()) return;
    setAddingComponent(true);
    setAddComponentError(false);
    try {
      const result = await estimateNutrition(newCompName.trim());
      const newComp = {
        name: result.name || newCompName.trim(),
        estimatedGrams: result.estimatedGrams ?? null,
        calories: result.calories ?? 0,
        protein: result.protein ?? 0,
        carbs: result.carbs ?? 0,
        fat: result.fat ?? 0
      };
      const nextComponents = [...components, newComp];
      setComponents(nextComponents);
      applyComponentsSum(nextComponents, excludedIdx, form.name);
      setNewCompName("");
      setShowAddComponent(false);
    } catch (e) {
      console.error("add missing component failed:", e);
      setAddComponentError(true);
    }
    setAddingComponent(false);
  };
  const valid = form.name && form.calories;
  const runEstimate = async () => {
    if (!description.trim()) return;
    setEstimating(true);
    setEstimateError(false);
    try {
      const result = await estimateNutrition(description.trim());
      const comps = Array.isArray(result.components) ? result.components : [];
      setComponents(comps);
      setExcludedIdx(new Set());
      applyComponentsSum(comps, new Set(), result.name || description.trim());
      setWasEstimated(true);
    } catch (e) {
      setEstimateError(true);
    }
    setEstimating(false);
  };
  return /*#__PURE__*/React.createElement(Modal, {
    onClose: onClose,
    title: isEditing ? "עריכת ארוחה" : "הוספת ארוחה"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, !finalStage && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold mb-1.5 block",
    style: {
      color: "#6B8579"
    }
  }, "צילום הארוחה"), !photoPreview ? /*#__PURE__*/React.createElement("label", {
    className: "w-full py-8 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-2 cursor-pointer",
    style: {
      borderColor: "#DCE4DE",
      background: "#FFF"
    }
  }, /*#__PURE__*/React.createElement(Camera, {
    size: 22,
    color: "#9CB0A5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold",
    style: {
      color: "#9CB0A5"
    }
  }, "צילום או העלאת תמונה"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: handlePhotoSelect,
    className: "hidden"
  })) : /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-2xl overflow-hidden",
    style: {
      height: 160
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photoPreview,
    alt: "תמונת הארוחה",
    className: "w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setPhotoPreview(null);
      setPhotoFile(null);
    },
    className: "absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center",
    style: {
      background: "rgba(23,46,39,0.6)"
    }
  }, /*#__PURE__*/React.createElement(X, {
    size: 14,
    color: "#fff"
  }))), photoFile && /*#__PURE__*/React.createElement("button", {
    onClick: runPhotoEstimate,
    disabled: estimatingPhoto,
    className: "w-full py-3 rounded-2xl disp font-bold text-white text-xs mt-2.5 flex items-center justify-center gap-2",
    style: {
      background: estimatingPhoto ? "#B7C6BD" : "#2F6F52"
    }
  }, estimatingPhoto ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Loader2, {
    size: 14,
    className: "animate-spin"
  }), " מזהה מהתמונה...") : "זיהוי אוטומטי מהתמונה"), photoError && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] mt-1.5",
    style: {
      color: "#B14C63"
    }
  }, "לא הצלחתי לזהות מהתמונה - אפשר לתאר במילים למטה או למלא ידנית.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 h-px",
    style: {
      background: "#EAF0EC"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold",
    style: {
      color: "#9CB0A5"
    }
  }, "או"), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 h-px",
    style: {
      background: "#EAF0EC"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold mb-1.5 block",
    style: {
      color: "#6B8579"
    }
  }, "מה אכלת/שתית? (אפשר לציין כמות, למשל \"300 גרם\" או \"2 כוסות\")"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    value: description,
    onChange: e => setDescription(e.target.value),
    placeholder: "לדוגמה: קפה ברד גדול",
    onKeyDown: e => e.key === "Enter" && runEstimate(),
    className: "flex-1 py-3.5 px-4 rounded-2xl border-2 outline-none text-sm font-medium bg-white",
    style: {
      borderColor: "#DCE4DE",
      color: "#172E27"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: runEstimate,
    disabled: !description.trim() || estimating,
    className: "px-4 rounded-2xl disp font-bold text-white text-xs shrink-0 flex items-center gap-1.5",
    style: {
      background: description.trim() && !estimating ? "#2F6F52" : "#B7C6BD"
    }
  }, estimating ? /*#__PURE__*/React.createElement(Loader2, {
    size: 14,
    className: "animate-spin"
  }) : "חישוב אוטומטי")), estimateError && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] mt-1.5",
    style: {
      color: "#B14C63"
    }
  }, "לא הצלחתי להעריך - אפשר למלא ידנית למטה.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setManualMode(true),
    className: "w-full text-center py-2 text-xs font-bold",
    style: {
      color: "#6B8579"
    }
  }, "או הזנה ידנית, בלי AI")), finalStage && /*#__PURE__*/React.createElement(React.Fragment, null, !isEditing && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setWasEstimated(false);
      setManualMode(false);
      setComponents([]);
      setExcludedIdx(new Set());
    },
    className: "text-xs font-bold mb-1",
    style: {
      color: "#2F6F52"
    }
  }, "← חזרה לצילום/תיאור מחדש"), components.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, components.map((c, i) => {
    const excluded = excludedIdx.has(i);
    if (editingCompIdx === i) {
      return /*#__PURE__*/React.createElement(ComponentEditRow, {
        key: i,
        comp: c,
        onSave: updated => updateComponent(i, updated),
        onCancel: () => setEditingCompIdx(null)
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "w-full flex items-center justify-between rounded-xl px-3 py-2.5",
      style: {
        background: excluded ? "#F4F7F4" : "#FFFFFF",
        border: "1px solid #EAF0EC",
        opacity: excluded ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggleComponent(i),
      className: "flex items-center gap-2.5 flex-1 text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
      style: {
        borderColor: excluded ? "#DCE4DE" : "#2F6F52",
        background: excluded ? "transparent" : "#2F6F52"
      }
    }, !excluded && /*#__PURE__*/React.createElement(Check, {
      size: 11,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-bold",
      style: {
        color: "#172E27",
        textDecoration: excluded ? "line-through" : "none"
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px]",
      style: {
        color: "#6B8579"
      }
    }, "כ-", c.estimatedGrams ?? "—", " גרם · ", c.calories, " קק״ל"))), /*#__PURE__*/React.createElement("button", {
      onClick: () => setEditingCompIdx(i),
      className: "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
      style: {
        color: "#9CB0A5"
      }
    }, /*#__PURE__*/React.createElement(Pencil, {
      size: 13
    })));
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] px-1",
    style: {
      color: "#9CB0A5"
    }
  }, "לחצי על מרכיב כדי להוציא/להכניס אותו מהסכום (למשל אם לא היה בפועל בצלחת שלך)."), !showAddComponent ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowAddComponent(true),
    className: "w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold",
    style: {
      background: "#F4F7F4",
      color: "#2F6F52",
      border: "1px dashed #DCE4DE"
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 13
  }), " הוספת מרכיב שחסר") : /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-3",
    style: {
      background: "#F4F7F4"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    value: newCompName,
    onChange: e => setNewCompName(e.target.value),
    placeholder: "לדוגמה: זיתים, טחינה",
    onKeyDown: e => e.key === "Enter" && addMissingComponent(),
    className: "flex-1 py-2.5 px-3 rounded-xl border-2 outline-none text-xs font-medium bg-white",
    style: {
      borderColor: "#DCE4DE",
      color: "#172E27"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: addMissingComponent,
    disabled: !newCompName.trim() || addingComponent,
    className: "px-3.5 rounded-xl disp font-bold text-white text-xs shrink-0 flex items-center",
    style: {
      background: newCompName.trim() && !addingComponent ? "#2F6F52" : "#B7C6BD"
    }
  }, addingComponent ? /*#__PURE__*/React.createElement(Loader2, {
    size: 13,
    className: "animate-spin"
  }) : "הוספה")), addComponentError && /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] mt-1.5",
    style: {
      color: "#B14C63"
    }
  }, "לא הצלחתי להעריך את המרכיב - נסי שם אחר.")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl px-3.5 py-2.5",
    style: {
      background: "#EAF3EC"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold",
    style: {
      color: "#2F6F52"
    }
  }, "סה״כ: ", form.name, " · כ-", estimatedGrams, " גרם · ", form.calories, " קק״ל"))), wasEstimated && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[11px]",
    style: {
      color: "#6B8579"
    }
  }, "הערכת AI - מוזמנת לתקן למטה."), /*#__PURE__*/React.createElement("button", {
    onClick: () => openNutritionSearch(form.name || description),
    title: "בדיקת הנתונים ברשת",
    className: "flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-full",
    style: {
      background: "#EAF3EC",
      color: "#2F6F52"
    }
  }, /*#__PURE__*/React.createElement(Search, {
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold"
  }, "בדיקה ברשת"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-1.5"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold",
    style: {
      color: "#6B8579"
    }
  }, "שם המאכל"), form.name && /*#__PURE__*/React.createElement("button", {
    onClick: () => openNutritionSearch(form.name),
    title: "בדיקת הנתונים ברשת",
    className: "w-7 h-7 rounded-full flex items-center justify-center",
    style: {
      background: "#F4F7F4",
      color: "#6B8579"
    }
  }, /*#__PURE__*/React.createElement(Search, {
    size: 13
  }))), /*#__PURE__*/React.createElement(TextField, {
    value: form.name,
    onChange: v => setForm({
      ...form,
      name: v
    }),
    placeholder: "לדוגמה: חזה עוף עם אורז"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(NumField, {
    label: "קלוריות",
    value: form.calories,
    onChange: v => setForm({
      ...form,
      calories: v
    })
  }), /*#__PURE__*/React.createElement(NumField, {
    label: "חלבון (ג')",
    value: form.protein,
    onChange: v => setForm({
      ...form,
      protein: v
    })
  }), /*#__PURE__*/React.createElement(NumField, {
    label: "פחמימה (ג')",
    value: form.carbs,
    onChange: v => setForm({
      ...form,
      carbs: v
    })
  }), /*#__PURE__*/React.createElement(NumField, {
    label: "שומן (ג')",
    value: form.fat,
    onChange: v => setForm({
      ...form,
      fat: v
    })
  })))), /*#__PURE__*/React.createElement("button", {
    disabled: !valid,
    onClick: () => onSave({
      id: isEditing ? initialMeal.id : Date.now().toString(),
      name: form.name,
      calories: Number(form.calories) || 0,
      protein: Number(form.protein) || 0,
      carbs: Number(form.carbs) || 0,
      fat: Number(form.fat) || 0,
      estimatedGrams: estimatedGrams,
      components: components.filter((_, i) => !excludedIdx.has(i))
    }),
    className: "w-full py-3.5 rounded-2xl disp font-bold text-white mt-5",
    style: {
      background: valid ? "#2F6F52" : "#B7C6BD"
    }
  }, isEditing ? "עדכון" : "שמירה"));
}
function ComponentEditRow({
  comp,
  onSave,
  onCancel
}) {
  const [name, setName] = useState(comp.name);
  const [grams, setGrams] = useState(comp.estimatedGrams ?? "");
  const [calories, setCalories] = useState(comp.calories);
  const [protein, setProtein] = useState(comp.protein);
  const [carbs, setCarbs] = useState(comp.carbs);
  const [fat, setFat] = useState(comp.fat);
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-3 space-y-2",
    style: {
      background: "#FFFFFF",
      border: "1px solid #3B7A57"
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    value: name,
    onChange: setName,
    placeholder: "שם המרכיב"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, /*#__PURE__*/React.createElement(NumField, {
    label: "גרם",
    value: grams,
    onChange: setGrams
  }), /*#__PURE__*/React.createElement(NumField, {
    label: "קלוריות",
    value: calories,
    onChange: setCalories
  }), /*#__PURE__*/React.createElement(NumField, {
    label: "חלבון",
    value: protein,
    onChange: setProtein
  }), /*#__PURE__*/React.createElement(NumField, {
    label: "פחמימה",
    value: carbs,
    onChange: setCarbs
  }), /*#__PURE__*/React.createElement(NumField, {
    label: "שומן",
    value: fat,
    onChange: setFat
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 pt-1"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    className: "flex-1 py-2.5 rounded-xl text-xs font-bold",
    style: {
      background: "#F4F7F4",
      color: "#6B8579"
    }
  }, "ביטול"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSave({
      name: name.trim() || comp.name,
      estimatedGrams: grams === "" ? null : Number(grams),
      calories: Number(calories) || 0,
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fat: Number(fat) || 0
    }),
    className: "flex-1 py-2.5 rounded-xl text-xs font-bold text-white",
    style: {
      background: "#2F6F52"
    }
  }, "שמירה")));
}
function calcStreak(history) {
  let streak = 0;
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].completed >= history[i].total) streak++;else break;
  }
  return streak;
}
function Workouts({
  plan,
  onToggle,
  history,
  onEditDay,
  onEndWeek,
  profile,
  onApplyPlan
}) {
  const doneCount = plan.filter(d => d.done).length;
  const [editingIdx, setEditingIdx] = useState(null);
  const [confirmEndWeek, setConfirmEndWeek] = useState(false);
  const [showGenerate, setShowGenerate] = useState(false);
  const streak = calcStreak(history);
  return /*#__PURE__*/React.createElement("div", {
    className: "px-5 pt-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-1"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "disp text-xl font-bold",
    style: {
      color: "#172E27"
    }
  }, "תוכנית אימונים שבועית"), streak > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold",
    style: {
      background: "#FEF3E2",
      color: "#D9A441"
    }
  }, /*#__PURE__*/React.createElement(Flame, {
    size: 13
  }), " ", streak)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs mb-4",
    style: {
      color: "#6B8579"
    }
  }, doneCount, " מתוך ", plan.length, " ימים הושלמו"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowGenerate(true),
    className: "w-full py-3 rounded-2xl disp font-bold text-sm text-white mb-5 flex items-center justify-center gap-2",
    style: {
      background: "#2F6F52"
    }
  }, /*#__PURE__*/React.createElement(Dumbbell, {
    size: 16
  }), " הצעת תוכנית מותאמת אישית"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5 mb-5"
  }, plan.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "w-full text-right rounded-2xl p-4 flex items-center gap-3",
    style: {
      background: "#FFFFFF",
      boxShadow: "0 2px 12px rgba(23,46,39,0.05)",
      opacity: d.done ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onToggle(i),
    className: "w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2",
    style: {
      borderColor: d.done ? "#2F6F52" : "#DCE4DE",
      background: d.done ? "#2F6F52" : "transparent"
    }
  }, d.done && /*#__PURE__*/React.createElement(Check, {
    size: 14,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onToggle(i),
    className: "flex-1 text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-bold mb-0.5",
    style: {
      color: "#2F6F52"
    }
  }, d.day), /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-sm mb-1",
    style: {
      color: "#172E27",
      textDecoration: d.done ? "line-through" : "none"
    }
  }, d.title), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px]",
    style: {
      color: "#6B8579"
    }
  }, d.exercises.join(" · "))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditingIdx(i),
    className: "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
    style: {
      color: "#9CB0A5"
    }
  }, /*#__PURE__*/React.createElement(Pencil, {
    size: 15
  }))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirmEndWeek(true),
    className: "w-full py-3.5 rounded-2xl disp font-bold text-sm mb-6",
    style: {
      background: "#EAF3EC",
      color: "#2F6F52"
    }
  }, "סיום השבוע ומעבר לשבוע חדש"), history.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold mb-2.5",
    style: {
      color: "#6B8579"
    }
  }, "היסטוריית שבועות"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, [...history].reverse().slice(0, 8).map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rounded-xl px-4 py-3 flex justify-between items-center",
    style: {
      background: "#FFFFFF"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-medium",
    style: {
      color: "#6B8579"
    }
  }, fmtDateHe(h.date)), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-sm flex items-center gap-1",
    style: {
      color: h.completed >= h.total ? "#2F6F52" : "#172E27"
    }
  }, h.completed >= h.total && /*#__PURE__*/React.createElement(Flame, {
    size: 13,
    color: "#D9A441"
  }), h.completed, "/", h.total, " ימים"))))), editingIdx !== null && /*#__PURE__*/React.createElement(EditDayModal, {
    day: plan[editingIdx],
    onClose: () => setEditingIdx(null),
    onSave: (title, exercises) => {
      onEditDay(editingIdx, title, exercises);
      setEditingIdx(null);
    }
  }), confirmEndWeek && /*#__PURE__*/React.createElement(Modal, {
    title: "סיום השבוע?",
    onClose: () => setConfirmEndWeek(false)
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm mb-5",
    style: {
      color: "#4B6459"
    }
  }, "השבוע הנוכחי (", doneCount, "/", plan.length, " ימים) יישמר בהיסטוריה, וכל הימים יסומנו מחדש כ\"לא בוצע\" כדי להתחיל שבוע נקי. תרגילי התוכנית עצמם לא יימחקו."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirmEndWeek(false),
    className: "flex-1 py-3 rounded-2xl disp font-bold text-sm",
    style: {
      background: "#F4F7F4",
      color: "#6B8579"
    }
  }, "ביטול"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onEndWeek();
      setConfirmEndWeek(false);
    },
    className: "flex-1 py-3 rounded-2xl disp font-bold text-sm text-white",
    style: {
      background: "#2F6F52"
    }
  }, "אישור"))), showGenerate && /*#__PURE__*/React.createElement(GeneratePlanModal, {
    profile: profile,
    onClose: () => setShowGenerate(false),
    onApply: newPlan => {
      onApplyPlan(newPlan);
      setShowGenerate(false);
    }
  }));
}
function GeneratePlanModal({
  profile,
  onClose,
  onApply
}) {
  const [location, setLocation] = useState("home_no_equipment");
  const [goals, setGoals] = useState(["ירידה במשקל"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const locations = [{
    id: "home_no_equipment",
    label: "בבית, בלי ציוד"
  }, {
    id: "home_basic",
    label: "בבית, עם ציוד בסיסי"
  }, {
    id: "gym",
    label: "בחדר כושר"
  }];
  const goalOptions = ["ירידה במשקל", "חיטוב ועיצוב", "חיזוק ובניית שריר", "כושר וסיבולת כללית"];
  const toggleGoal = g => {
    setGoals(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]);
  };
  const generate = async () => {
    if (goals.length === 0) return;
    setLoading(true);
    setError(false);
    try {
      const newPlan = await generateWorkoutPlan(profile, location, goals);
      onApply(newPlan);
    } catch (e) {
      console.error("workout plan generation failed:", e);
      setError(true);
      setLoading(false);
    }
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: "תוכנית מותאמת אישית",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs mb-4",
    style: {
      color: "#6B8579"
    }
  }, "התוכנית תיבנה לפי הגיל, המין ורמת הפעילות שלך, ותחליף את התוכנית הנוכחית (עדיין אפשר לערוך כל יום לאחר מכן)."), /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold mb-1.5 block",
    style: {
      color: "#6B8579"
    }
  }, "מה המטרה? (אפשר לבחור כמה)"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-4"
  }, goalOptions.map(g => /*#__PURE__*/React.createElement("button", {
    key: g,
    onClick: () => toggleGoal(g),
    className: "py-2 px-3.5 rounded-full text-xs font-semibold border-2",
    style: {
      borderColor: goals.includes(g) ? "#3B7A57" : "#DCE4DE",
      background: goals.includes(g) ? "#EAF3EC" : "#FFF",
      color: "#172E27"
    }
  }, g))), /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold mb-1.5 block",
    style: {
      color: "#6B8579"
    }
  }, "איפה מתאמנים?"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 mb-5"
  }, locations.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => setLocation(l.id),
    className: "w-full text-right py-3 px-4 rounded-2xl text-sm font-medium border-2",
    style: {
      borderColor: location === l.id ? "#3B7A57" : "#DCE4DE",
      background: location === l.id ? "#EAF3EC" : "#FFF",
      color: "#172E27"
    }
  }, l.label))), goals.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] mb-3",
    style: {
      color: "#B14C63"
    }
  }, "בחר/י לפחות מטרה אחת."), error && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] mb-3",
    style: {
      color: "#B14C63"
    }
  }, "לא הצלחתי לבנות תוכנית - נסה/י שוב."), /*#__PURE__*/React.createElement("button", {
    onClick: generate,
    disabled: loading || goals.length === 0,
    className: "w-full py-3.5 rounded-2xl disp font-bold text-white flex items-center justify-center gap-2",
    style: {
      background: loading || goals.length === 0 ? "#B7C6BD" : "#2F6F52"
    }
  }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Loader2, {
    size: 16,
    className: "animate-spin"
  }), " בונה תוכנית...") : "בניית התוכנית"));
}
function EditDayModal({
  day,
  onClose,
  onSave
}) {
  const [title, setTitle] = useState(day.title);
  const [exercisesText, setExercisesText] = useState(day.exercises.join("\n"));
  return /*#__PURE__*/React.createElement(Modal, {
    title: `עריכת יום ${day.day}`,
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "כותרת האימון",
    value: title,
    onChange: setTitle,
    placeholder: "לדוגמה: פלג גוף עליון"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold mb-1.5 block",
    style: {
      color: "#6B8579"
    }
  }, "תרגילים (שורה לכל תרגיל)"), /*#__PURE__*/React.createElement("textarea", {
    value: exercisesText,
    onChange: e => setExercisesText(e.target.value),
    rows: 5,
    className: "w-full py-3 px-4 rounded-2xl border-2 outline-none text-sm font-medium bg-white resize-none",
    style: {
      borderColor: "#DCE4DE",
      color: "#172E27"
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSave(title.trim() || day.title, exercisesText.split("\n").map(s => s.trim()).filter(Boolean)),
    className: "w-full py-3.5 rounded-2xl disp font-bold text-white mt-5",
    style: {
      background: "#2F6F52"
    }
  }, "שמירה"));
}
 
// ---------- Weight ----------
function WeightTab({
  weightLog,
  profile,
  onAdd,
  onLoadDemo
}) {
  const bmi = profile ? calcBMI(weightLog[weightLog.length - 1]?.weightKg ?? profile.weightKg, profile.heightCm) : null;
  const bmiInfo = bmi ? bmiLabel(bmi) : null;
  const chartData = weightLog.map(e => ({
    date: fmtDateHe(e.date),
    weight: e.weightKg
  }));
  const firstWeight = weightLog.length > 0 ? weightLog[0].weightKg : null;
  const lastWeight = weightLog.length > 0 ? weightLog[weightLog.length - 1].weightKg : null;
  const totalDelta = weightLog.length > 1 && firstWeight != null ? lastWeight - firstWeight : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "px-5 pt-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "disp text-xl font-bold",
    style: {
      color: "#172E27"
    }
  }, "מעקב משקל"), /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    className: "w-9 h-9 rounded-full flex items-center justify-center text-white",
    style: {
      background: "#2F6F52"
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 18
  }))), bmiInfo && /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-4 mb-4 flex items-center justify-between",
    style: {
      background: "#FFFFFF",
      boxShadow: "0 2px 12px rgba(23,46,39,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-medium mb-0.5",
    style: {
      color: "#6B8579"
    }
  }, "BMI"), /*#__PURE__*/React.createElement("div", {
    className: "disp text-xl font-extrabold",
    style: {
      color: "#172E27"
    }
  }, bmi.toFixed(1))), /*#__PURE__*/React.createElement("div", {
    className: "px-3 py-1.5 rounded-full text-xs font-bold",
    style: {
      background: `${bmiInfo.color}22`,
      color: bmiInfo.color
    }
  }, bmiInfo.text)), totalDelta != null && /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-4 mb-4 flex items-center justify-between",
    style: {
      background: "#FFFFFF",
      boxShadow: "0 2px 12px rgba(23,46,39,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-medium",
    style: {
      color: "#6B8579"
    }
  }, "שינוי מתחילת המעקב"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold",
    style: {
      background: totalDelta <= 0 ? "#EAF3EC" : "#FBEAEE",
      color: totalDelta <= 0 ? "#2F6F52" : "#B14C63"
    }
  }, totalDelta <= 0 ? /*#__PURE__*/React.createElement(TrendingDown, {
    size: 14
  }) : /*#__PURE__*/React.createElement(TrendingUp, {
    size: 14
  }), Math.abs(totalDelta).toFixed(1), " ק״ג")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-4 mb-4",
    style: {
      background: "#FFFFFF",
      boxShadow: "0 4px 24px rgba(23,46,39,0.06)"
    }
  }, chartData.length > 1 ? /*#__PURE__*/React.createElement(WeightChart, {
    data: chartData
  }) : /*#__PURE__*/React.createElement("div", {
    className: "text-center py-10"
  }, /*#__PURE__*/React.createElement(ScaleIcon, {
    size: 28,
    color: "#B7C6BD",
    className: "mx-auto mb-2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-xs mb-3",
    style: {
      color: "#9CB0A5"
    }
  }, "הוסיפי לפחות 2 מדידות כדי לראות גרף"), /*#__PURE__*/React.createElement("button", {
    onClick: onLoadDemo,
    className: "text-[11px] font-bold px-3 py-2 rounded-full mx-auto",
    style: {
      background: "#F4F7F4",
      color: "#6B8579"
    }
  }, "טעינת נתוני דוגמה (לבדיקה בלבד)"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, [...weightLog].reverse().slice(0, 8).map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rounded-xl px-4 py-3 flex justify-between items-center",
    style: {
      background: "#FFFFFF"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-medium",
    style: {
      color: "#6B8579"
    }
  }, fmtDateHe(e.date)), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-sm",
    style: {
      color: "#172E27"
    }
  }, e.weightKg, " ק״ג")))));
}
function AddWeightModal({
  current,
  onClose,
  onSave
}) {
  const [val, setVal] = useState(current || "");
  return /*#__PURE__*/React.createElement(Modal, {
    onClose: onClose,
    title: "עדכון משקל"
  }, /*#__PURE__*/React.createElement(NumField, {
    label: "משקל נוכחי (ק״ג)",
    value: val,
    onChange: setVal
  }), /*#__PURE__*/React.createElement("button", {
    disabled: !val,
    onClick: () => onSave(Number(val)),
    className: "w-full py-3.5 rounded-2xl disp font-bold text-white mt-5",
    style: {
      background: val ? "#2F6F52" : "#B7C6BD"
    }
  }, "שמירה"));
}
 
// ---------- Profile ----------
function ProfileTab({
  profile,
  onSave,
  activeUser,
  onSwitchUser
}) {
  const [form, setForm] = useState(profile);
  const goals = form ? calcGoals(form) : null;
  const activeLabel = FAMILY_MEMBERS.find(u => u.id === activeUser)?.label || "";
  useEffect(() => {
    setForm(profile);
  }, [profile]);
  if (!form) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "px-5 pt-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "disp text-xl font-bold",
    style: {
      color: "#172E27"
    }
  }, "הפרופיל של ", activeLabel), /*#__PURE__*/React.createElement("button", {
    onClick: onSwitchUser,
    className: "text-xs font-bold px-3 py-2 rounded-full",
    style: {
      background: "#EAF3EC",
      color: "#2F6F52"
    }
  }, "החלפת משתמש")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-5 mb-5",
    style: {
      background: "#FFFFFF",
      boxShadow: "0 4px 24px rgba(23,46,39,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold mb-3",
    style: {
      color: "#2F6F52"
    }
  }, "היעדים שחושבו עבורך"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(StatBox, {
    label: "קלוריות ליום",
    value: goals.calorieGoal
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "חילוף חומרים (BMR)",
    value: goals.bmr
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "חלבון",
    value: `${goals.protein} ג'`
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "פחמימה",
    value: `${goals.carbs} ג'`
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, [{
    id: "female",
    label: "אישה"
  }, {
    id: "male",
    label: "גבר"
  }].map(g => /*#__PURE__*/React.createElement("button", {
    key: g.id,
    onClick: () => setForm({
      ...form,
      gender: g.id
    }),
    className: "py-3 rounded-2xl text-sm font-semibold border-2",
    style: {
      borderColor: form.gender === g.id ? "#3B7A57" : "#DCE4DE",
      background: form.gender === g.id ? "#EAF3EC" : "#FFF",
      color: "#172E27"
    }
  }, g.label))), /*#__PURE__*/React.createElement(LabeledInput, {
    label: "גיל",
    unit: "שנים",
    value: form.age,
    onChange: v => setForm({
      ...form,
      age: Number(v)
    })
  }), /*#__PURE__*/React.createElement(LabeledInput, {
    label: "גובה",
    unit: "ס״מ",
    value: form.heightCm,
    onChange: v => setForm({
      ...form,
      heightCm: Number(v)
    })
  }), /*#__PURE__*/React.createElement(LabeledInput, {
    label: "משקל",
    unit: "ק״ג",
    value: form.weightKg,
    onChange: v => setForm({
      ...form,
      weightKg: Number(v)
    })
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold mb-1.5 block",
    style: {
      color: "#6B8579"
    }
  }, "רמת פעילות"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, ACTIVITY_LEVELS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.id,
    onClick: () => setForm({
      ...form,
      activityLevel: a.id
    }),
    className: "w-full text-right py-3 px-4 rounded-2xl text-xs font-medium border-2",
    style: {
      borderColor: form.activityLevel === a.id ? "#3B7A57" : "#DCE4DE",
      background: form.activityLevel === a.id ? "#EAF3EC" : "#FFF",
      color: "#172E27"
    }
  }, a.label))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSave(form),
    className: "w-full py-3.5 rounded-2xl disp font-bold text-white",
    style: {
      background: "#2F6F52"
    }
  }, "שמירת שינויים"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-center mt-4 leading-relaxed",
    style: {
      color: "#9CB0A5"
    }
  }, "החישוב מבוסס על נוסחת Mifflin-St Jeor ומיועד להערכה כללית בלבד. לפני שינוי תזונתי משמעותי מומלץ להתייעץ עם דיאטן/ית או רופא/ה."));
}
function StatBox({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-3",
    style: {
      background: "#F4F7F4"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "disp text-lg font-extrabold",
    style: {
      color: "#172E27"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-medium",
    style: {
      color: "#6B8579"
    }
  }, label));
}
 
// ---------- shared UI ----------
function BottomNav({
  tab,
  setTab
}) {
  const items = [{
    id: "dashboard",
    label: "בית",
    icon: Home
  }, {
    id: "food",
    label: "תזונה",
    icon: Utensils
  }, {
    id: "workouts",
    label: "אימונים",
    icon: Dumbbell
  }, {
    id: "weight",
    label: "משקל",
    icon: ScaleIcon
  }, {
    id: "profile",
    label: "פרופיל",
    icon: User
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 right-0 flex justify-around items-center px-2 py-2.5",
    style: {
      background: "#FFFFFF",
      borderTop: "1px solid #EAF0EC"
    }
  }, items.map(it => {
    const Icon = it.icon;
    const active = tab === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => setTab(it.id),
      className: "flex flex-col items-center gap-1 px-2 py-1"
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 20,
      color: active ? "#2F6F52" : "#B7C6BD",
      strokeWidth: active ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-semibold",
      style: {
        color: active ? "#2F6F52" : "#B7C6BD"
      }
    }, it.label));
  }));
}
function Modal({
  title,
  onClose,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-20 flex items-end",
    style: {
      background: "rgba(23,46,39,0.35)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: "w-full rounded-t-3xl p-6",
    style: {
      background: "#F4F7F4",
      maxHeight: "85%",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "disp text-lg font-bold",
    style: {
      color: "#172E27"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "w-8 h-8 rounded-full flex items-center justify-center",
    style: {
      background: "#EAF0EC"
    }
  }, /*#__PURE__*/React.createElement(X, {
    size: 16,
    color: "#6B8579"
  }))), children));
}
function TextField({
  label,
  value,
  onChange,
  placeholder
}) {
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold mb-1.5 block",
    style: {
      color: "#6B8579"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: placeholder,
    className: "w-full py-3.5 px-4 rounded-2xl border-2 outline-none text-sm font-medium bg-white",
    style: {
      borderColor: "#DCE4DE",
      color: "#172E27"
    }
  }));
}
function NumField({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold mb-1.5 block",
    style: {
      color: "#6B8579"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    onChange: e => onChange(e.target.value),
    className: "w-full py-3.5 px-4 rounded-2xl border-2 outline-none text-sm font-medium bg-white",
    style: {
      borderColor: "#DCE4DE",
      color: "#172E27"
    }
  }));
}
const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(/*#__PURE__*/React.createElement(App, null));
 