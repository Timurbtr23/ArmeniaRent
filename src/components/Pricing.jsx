import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BookingModal from './BookingModal'
import SuccessToast from './SuccessToast'

const periods = [
  { key: '1_2_days', label: '1-2 дня' },
  { key: '3_6_days', label: '3-6 дней' },
  { key: '7_13_days', label: '7-13 дней' },
  { key: '14_19_days', label: '14-19 дней' },
  { key: '20_30_days', label: '20-30 дней' },
]

// Курсы валют
// 1 USD = 80 RUB, 1 AMD = 0.21 RUB → 1 USD = 80/0.21 ≈ 380.95 AMD
const RATES = {
  AMD_TO_RUB: 0.21,
  USD_TO_RUB: 80,
  USD_TO_AMD: 80 / 0.21, // ≈ 380.95
}

// Конвертируем сырое число в целевую валюту
function convertPrice(val, baseCur, targetCur) {
  if (!val) return null;
  let rub;
  if (baseCur === 'AMD') rub = val * RATES.AMD_TO_RUB;
  else if (baseCur === 'USD') rub = val * RATES.USD_TO_RUB;
  else rub = val;

  if (targetCur === 'RUB') return rub;
  if (targetCur === 'USD') return rub / RATES.USD_TO_RUB;
  if (targetCur === 'AMD') return rub / RATES.AMD_TO_RUB;
  return rub;
}

function formatDisplayPrice(val, currency) {
  if (val === null || val === undefined) return 'по запросу';
  let rounded;
  if (currency === 'USD') {
    rounded = Math.round(val);
    return `$${rounded.toLocaleString('ru-RU')}`;
  }
  if (currency === 'RUB') {
    rounded = Math.round(val / 10) * 10;
    return `${rounded.toLocaleString('ru-RU')} ₽`;
  }
  rounded = Math.round(val / 100) * 100;
  return `${rounded.toLocaleString('ru-RU')} ֏`;
}

const currencies = [
  { key: 'AMD', label: '֏ AMD' },
  { key: 'RUB', label: '₽ RUB' },
  { key: 'USD', label: '$ USD' },
]

const CATEGORY_STYLES = {
  'ПРЕМИУМ':                 'text-amber-400 border-amber-400/40 bg-amber-400/5',
  'СПОРТ':                   'text-red-400 border-red-400/40 bg-red-400/5',
  'ВНЕДОРОЖНИК / КРОССОВЕР': 'text-emerald-400 border-emerald-400/40 bg-emerald-400/5',
  'СЕДАН':                   'text-sky-400 border-sky-400/40 bg-sky-400/5',
  'ЭКОНОМ':                  'text-zinc-400 border-zinc-500/40 bg-zinc-500/5',
  'МИНИВЭН':                 'text-purple-400 border-purple-400/40 bg-purple-400/5',
}

const ALL_CATEGORIES = ['BСЕ', 'ВНЕДОРОЖНИК / КРОССОВЕР', 'ПРЕМИУМ', 'СЕДАН', 'ЭКОНОМ', 'МИНИВЭН', 'СПОРТ'];

const rawCars = [
  {
    brand: "Toyota", model: "Prado", year: 2014,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 58000, "3_6_days": 55000, "7_13_days": 50000, "14_19_days": 45000, "20_30_days": 35000 },
    overrideImages: ['/images/ToyotaPrado.webp', '/images/ToyotaPrado_salon.webp'],
  },
  {
    brand: "Jeep", model: "Compass", year: 2018,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 29000, "3_6_days": 27000, "7_13_days": 25000, "14_19_days": 23000, "20_30_days": 19000 },
    overrideImages: ['/images/Jeep2018.png', '/images/Jeep2018Side.png', '/images/Jeep2018Back.png', '/images/Jeep2018Salon.png'],
  },
  {
    brand: "Porsche", model: "Panamera", year: 2011,
    categories: ['ПРЕМИУМ', 'СПОРТ'],
    popular: true,
    prices: { "1_2_days": 90000, "3_6_days": 85000, "7_13_days": 80000, "14_19_days": 76000, "20_30_days": 72000 },
    overrideImages: ['/images/porsche_panam.png', '/images/porscheFront.png', '/images/porsche_lside.png', '/images/porsche_interior.png'],
  },
  {
    brand: "Kia", model: "Rio", year: 2022,
    categories: ['ЭКОНОМ'],
    prices: { "1_2_days": 27000, "3_6_days": 25000, "7_13_days": 22000, "14_19_days": 19000, "20_30_days": 17000 },
    overrideImages: ['/images/KiaRio2022.webp', '/images/KiaRio2022_salon.webp'],
  },
  {
    brand: "Lexus", model: "GX460", year: 2022,
    categories: ['ПРЕМИУМ', 'ВНЕДОРОЖНИК / КРОССОВЕР'],
    popular: true,
    prices: { "1_2_days": 195, "3_6_days": 165, "7_13_days": 150, "14_19_days": 130, "20_30_days": 110 },
    currency: "USD",
    overrideImages: ['/images/Lexusgx.webp', '/images/Lexusgx_side.webp', '/images/Lexusgx_salon.webp'],
  },
  {
    brand: "Hyundai", model: "Sonata", year: 2020,
    categories: ['СЕДАН'],
    prices: { "1_2_days": 27000, "3_6_days": 25000, "7_13_days": 22000, "14_19_days": 20000, "20_30_days": 19000 },
    overrideImages: ['/images/sonataMain.png', '/images/sonataSide.png', '/images/sonataRside.png', '/images/sonataBack.png', '/images/sonataSalon.png'],
  },
  {
    brand: "Mercedes-Benz", model: "S 222", year: 2016,
    categories: ['ПРЕМИУМ'],
    prices: { "1_2_days": 98000, "3_6_days": 95000, "7_13_days": 85000, "14_19_days": 75000, "20_30_days": 65000 },
    overrideImages: ['/images/Mercedes222.webp', '/images/Mercedes222_salon.webp'],
  },
  {
    brand: "Toyota", model: "Land Cruiser", year: 2022,
    categories: ['ПРЕМИУМ', 'ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 390, "3_6_days": 370, "7_13_days": 350, "14_19_days": 320, "20_30_days": 290 },
    currency: "USD",
    overrideImages: ['/images/Landcruz.webp', '/images/Landcruz_salon.webp'],
  },
  {
    brand: "Nissan", model: "Rogue", year: 2020,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 29000, "3_6_days": 27000, "7_13_days": 25000, "14_19_days": 23000, "20_30_days": 21000 },
    overrideImages: ['/images/rogueLside.png', '/images/rogueRside.png', '/images/rogueBack.png', '/images/rogueSalon.png'],
  },
  {
    brand: "Kia", model: "Optima", year: 2019,
    categories: ['СЕДАН'],
    prices: { "1_2_days": 27000, "3_6_days": 25000, "7_13_days": 22000, "14_19_days": 20000, "20_30_days": 19000 },
    overrideImages: ['/images/kia_main.png', '/images/kia_lside.png', '/images/kia_salon.png'],
  },
  {
    brand: "Toyota", model: "Camry", year: 2019,
    categories: ['СЕДАН'],
    prices: { "1_2_days": 30000, "3_6_days": 27000, "7_13_days": 25000, "14_19_days": 23000, "20_30_days": 21000 },
    overrideImages: ['/images/camry.png', '/images/camry-salon.png'],
  },
  {
    brand: "Hyundai", model: "Kona", year: 2022,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 25000, "3_6_days": 23000, "7_13_days": 22000, "14_19_days": 19000, "20_30_days": 17000 },
    overrideImages: ['/images/kona.webp', '/images/konaSalon.webp'],
  },
  {
    brand: "Mercedes-Benz", model: "S 221", year: 2011,
    categories: ['ПРЕМИУМ'],
    prices: { "1_2_days": 55000, "3_6_days": 50000, "7_13_days": 45000, "14_19_days": 40000, "20_30_days": 35000 },
    overrideImages: ['/images/MERS221.webp', '/images/MERS221_salon.webp'],
  },
  {
    brand: "Mitsubishi", model: "Pajero", year: 2018,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 33000, "3_6_days": 30000, "7_13_days": 29000, "14_19_days": 27000, "20_30_days": 25000 },
    overrideImages: ['/images/pajero.png', '/images/pajeroSalon.png'],
  },
  {
    brand: "Toyota", model: "Camry", year: 2022,
    categories: ['СЕДАН'],
    popular: true,
    prices: { "1_2_days": 95, "3_6_days": 85, "7_13_days": 80, "14_19_days": 75, "20_30_days": 70 },
    currency: "USD",
    overrideImages: ['/images/2022camry.webp', '/images/2022_camry_back-2.webp', '/images/2022camry_salon.webp'],
  },
  {
    brand: "Toyota", model: "Highlander", year: 2022,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 125, "3_6_days": 110, "7_13_days": 95, "14_19_days": 90, "20_30_days": 80 },
    currency: "USD",
    overrideImages: ['/images/toyohigh.webp', '/images/toyohigh_side.webp', '/images/toyohigh_salon.webp'],
  },
  {
    brand: "Jeep", model: "Compass", year: 2020,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 29000, "3_6_days": 27000, "7_13_days": 25000, "14_19_days": 23000, "20_30_days": 19000 },
    overrideImages: ['/images/jeep2020.png', '/images/jeep2020Side.png', '/images/jeep2020Back.png', '/images/jeep2020Salon.png'],
  },
  {
    brand: "Kia", model: "Soul", year: null,
    categories: ['ЭКОНОМ'],
    prices: { "1_2_days": 50, "3_6_days": 45, "7_13_days": 40, "14_19_days": 34, "20_30_days": 24 },
    currency: "USD",
    overrideImages: ['/images/kiaSoul.png', '/images/kiaSoulSalon.png'],
  },
  {
    brand: "Mercedes-Benz", model: "GL", year: null,
    categories: ['ПРЕМИУМ', 'ВНЕДОРОЖНИК / КРОССОВЕР'],
    popular: true,
    prices: { "1_2_days": 110000, "3_6_days": 100000, "7_13_days": 95000, "14_19_days": 85000, "20_30_days": 75000 },
    overrideImages: ['/images/MERSGL.webp', '/images/MERSGL_salon.webp'],
  },
  {
    brand: "Dodge", model: "Charger", year: 2023,
    categories: ['СПОРТ'],
    prices: { "1_2_days": 60000, "3_6_days": 55000, "7_13_days": 49000, "14_19_days": 43000, "20_30_days": 32000 },
    overrideImages: ['/images/DochRed.webp', '/images/DochRed_back.webp'],
  },
  {
    brand: "Nissan", model: "Murano", year: 2022,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 35000, "3_6_days": 33000, "7_13_days": 29000, "14_19_days": 27000, "20_30_days": 25000 },
    overrideImages: ['/images/NissanMurano.webp', '/images/NissanMurano_salon.webp'],
  },
  {
    brand: "BMW", model: "430", year: 2020,
    categories: ['ПРЕМИУМ', 'СПОРТ'],
    prices: { "1_2_days": 70000, "3_6_days": 68000, "7_13_days": 65000, "14_19_days": 62000, "20_30_days": 58000 },
    overrideImages: ['/images/Bmw430_main.png', '/images/Bmw430_salon.png'],
  },
  {
    brand: "Lada", model: "Niva 4x4", year: 2021,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    transmission: 'МКПП',
    prices: { "1_2_days": 28500, "3_6_days": 26000, "7_13_days": 23000, "14_19_days": 21500, "20_30_days": 21000 },
    overrideImages: ['/images/Niva.png', '/images/NivaSide.png', '/images/NivaBack.png', '/images/NivaSalon.png'],
  },
  {
    brand: "Nissan", model: "Altima", year: 2022,
    categories: ['СЕДАН'],
    prices: { "1_2_days": 29000, "3_6_days": 27000, "7_13_days": 23000, "14_19_days": 21000, "20_30_days": 19000 },
    overrideImages: ['/images/ALTIM.webp', '/images/ALTIM_salon.webp'],
  },
  {
    brand: "BMW", model: "7", year: 2020,
    categories: ['ПРЕМИУМ'],
    prices: { "1_2_days": 125000, "3_6_days": 115000, "7_13_days": 100000, "14_19_days": 90000, "20_30_days": 85000 },
    overrideImages: ['/images/BMW7.webp', '/images/BMW7_salon.webp'],
  },
  {
    brand: "Porsche", model: "Cayenne", year: 2016,
    categories: ['ПРЕМИУМ', 'ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 95000, "3_6_days": 85000, "7_13_days": 80000, "14_19_days": 73000, "20_30_days": 70000 },
    overrideImages: ['/images/cayenne.png', '/images/cayenneSalon.png'],
  },
  {
    brand: "Nissan", model: "Pathfinder", year: 2018,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 32000, "3_6_days": 30000, "7_13_days": 28000, "14_19_days": 26000, "20_30_days": 25000 },
    overrideImages: ['/images/pathfinder.png', '/images/pathfinder-salon.png'],
  },
  {
    brand: "Nissan", model: "Altima 2.5L", year: 2008,
    categories: ['ЭКОНОМ', 'СЕДАН'],
    prices: { "1_2_days": 19000, "3_6_days": 17000, "7_13_days": 15000, "14_19_days": 13000, "20_30_days": 11000 },
    overrideImages: ['/images/altimaMain.png', '/images/altimaFront.png', '/images/altimaBack.png', '/images/altimaLside.png', '/images/altimaSalon.png'],
  },
  {
    brand: "Honda", model: "Elysion 2.4L", year: 2006,
    categories: ['МИНИВЭН'],
    prices: { "1_2_days": 33000, "3_6_days": 29000, "7_13_days": 27000, "14_19_days": 25000, "20_30_days": 23000 },
    overrideImages: ['/images/elysionMain.png', '/images/elysionSide.png', '/images/elysionRside.png', '/images/elysionBack.png', '/images/elysionSalon.png'],
  },
  {
    brand: "Hyundai", model: "Tucson", year: 2018,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 25000, "3_6_days": 23000, "7_13_days": 22000, "14_19_days": 20000, "20_30_days": 19000 },
    overrideImages: ['/images/tucsonMain.png', '/images/tucsonFront.png', '/images/tucsonBack.png', '/images/tucsonSalon.png', '/images/tucsonSalonFront.png'],
  },
  {
    brand: "Nissan", model: "Sentra", year: 2021,
    categories: ['СЕДАН'],
    prices: { "1_2_days": 28000, "3_6_days": 25000, "7_13_days": 23000, "14_19_days": 20000, "20_30_days": 18000 },
    overrideImages: ['/images/SENTRA21.webp', '/images/SENTRA21_salon.webp'],
  },
  {
    brand: "Mercedes-Benz", model: "Viano 3.5L", year: 2008,
    categories: ['МИНИВЭН'],
    prices: { "1_2_days": 35000, "3_6_days": 33000, "7_13_days": 31000, "14_19_days": 28000, "20_30_days": 26000 },
    overrideImages: ['/images/vianoMain.png', '/images/vianoSide.png', '/images/vianoBack.png', '/images/vianoInterior.png', '/images/vianoSalon.png'],
  },
  {
    brand: "Toyota", model: "RAV 4", year: 2022,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    popular: true,
    prices: { "1_2_days": 45000, "3_6_days": 40000, "7_13_days": 35000, "14_19_days": 30000, "20_30_days": 28000 },
    overrideImages: ['/images/RAV4NEW.webp', '/images/RAV4NEW_salon.webp'],
  },
  {
    brand: "Hyundai", model: "Elantra 1.8L", year: 2010,
    categories: ['ЭКОНОМ'],
    prices: { "1_2_days": 77, "3_6_days": 72, "7_13_days": 65, "14_19_days": 62, "20_30_days": 56 },
    currency: "USD",
    overrideImages: ['/images/elantra.png', '/images/elantraFront.png', '/images/elantraBack.png', '/images/elantraSide.png', '/images/elantraSalon.png'],
  },
  {
    brand: "Kia", model: "Sportage", year: 2018,
    categories: ['ВНЕДОРОЖНИК / КРОССОВЕР'],
    popular: true,
    prices: { "1_2_days": 27000, "3_6_days": 25000, "7_13_days": 24000, "14_19_days": 22000, "20_30_days": 20000 },
    overrideImages: ['/images/sportageMain.png', '/images/sportageFront.png', '/images/sportageBack.png', '/images/sportageSide.png', '/images/sportageSalon.png'],
  },
  {
    brand: "Audi", model: "Q7 S-line", year: 2016,
    categories: ['ПРЕМИУМ', 'ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 88000, "3_6_days": 83000, "7_13_days": 75000, "14_19_days": 70000, "20_30_days": 60000 },
    overrideImages: ['/images/audiMain.webp', '/images/audiSalon.png'],
  },
  {
    brand: "Lexus", model: "RX 350 F Sport", year: 2022,
    categories: ['ПРЕМИУМ', 'ВНЕДОРОЖНИК / КРОССОВЕР'],
    prices: { "1_2_days": 95000, "3_6_days": 89000, "7_13_days": 84000, "14_19_days": 78000, "20_30_days": 73000 },
    overrideImages: ['/images/lexusMain.png', '/images/lexusBack.png'],
  },
]

const cars = rawCars.map(c => ({
  make: c.brand,
  model: c.model,
  year: c.year,
  categories: c.categories,
  images: c.overrideImages ?? [
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800'
  ],
  rawPrices: c.prices ?? null,
  baseCurrency: c.currency ?? 'AMD',
  popular: c.popular ?? false,
  features: [],
}));


function CarCard({ car, activePeriod, displayCurrency, onBook }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const prevImg = (e) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
  };

  const nextImg = (e) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) nextImg(e); // свайп влево
    if (touchEnd - touchStart > 50) prevImg(e); // свайп вправо
  };

  const rawVal = car.rawPrices ? car.rawPrices[activePeriod] : null;
  const convertedVal = rawVal ? convertPrice(rawVal, car.baseCurrency, displayCurrency) : null;
  const priceDisplay = formatDisplayPrice(convertedVal, displayCurrency);

  return (
    <div
      className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-zinc-800 flex flex-col ${car.popular
        ? 'ring-1 ring-accent-500 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] hover:ring-accent-400'
        : 'border border-zinc-700/50 hover:border-accent-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]'
        }`}
    >
      <div className="relative h-48 sm:h-56 bg-zinc-900 shrink-0 group" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <img
          src={car.images[imgIndex]}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover opacity-90 transition-opacity hover:opacity-100 cursor-grab active:cursor-grabbing"
          loading="lazy"
          decoding="async"
          draggable={false}
        />

        {car.images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer z-10"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer z-10"
              aria-label="Следующее фото"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              {car.images.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${i === imgIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`} />
              ))}
            </div>
          </>
        )}

        {car.popular && (
          <div className="absolute top-4 left-4 bg-accent-500 text-zinc-900 text-xs font-bold rounded-full px-3 py-1 uppercase tracking-wide shadow-md z-10">
            Популярный
          </div>
        )}
        {car.year && (
          <div className="absolute bottom-4 right-4 bg-zinc-900/80 backdrop-blur-sm text-zinc-50 text-xs font-semibold rounded-full px-3 py-1 border border-zinc-700 z-10">
            {car.year}
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow relative">
        {/* Category tags */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {car.categories.map((cat) => (
            <span
              key={cat}
              className={`text-xs uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${CATEGORY_STYLES[cat] ?? 'text-zinc-400 border-zinc-500/40 bg-zinc-500/5'}`}
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className="font-display text-xl font-bold mb-4 text-zinc-50 tracking-wide">
          {car.make} {car.model}
        </h3>

        <div className="mt-auto pt-6 border-t border-zinc-700/50 mb-6 relative">
          <div className="flex items-end gap-2">
            <span className="font-display text-3xl font-bold text-zinc-50">
              {priceDisplay}
            </span>
            {convertedVal && (
              <span className="text-sm pb-1 text-zinc-500 font-medium">/сутки</span>
            )}
          </div>
        </div>

        <button
          onClick={() => onBook(car)}
          className={`min-h-[48px] w-full py-3 rounded-xl font-semibold font-display transition-all duration-300 ${car.popular
            ? 'bg-accent-500 hover:bg-accent-400 text-zinc-900 shadow-md shadow-accent-500/20'
            : 'bg-zinc-100 hover:bg-white text-zinc-900 group-hover:bg-accent-500 group-hover:text-zinc-900 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'
            }`}
        >
          Забронировать
        </button>
      </div>
    </div>
  );
}


export default function Pricing() {
  const [activePeriod, setActivePeriod] = useState('3_6_days')
  const [activeCategory, setActiveCategory] = useState('BСЕ')
  const [displayCurrency, setDisplayCurrency] = useState('AMD')
  const [bookingCar, setBookingCar] = useState(null)
  const [showToast, setShowToast] = useState(false)

  const filteredCars = activeCategory === 'BСЕ'
    ? cars
    : cars.filter(c => c.categories.includes(activeCategory));

  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight">
            Более 30 автомобилей от 9 100 драм/сутки
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Здесь представлены актуальные цены на наши автомобили. Переключайте период: чем дольше аренда, тем ниже цена.
          </p>
        </div>

        {/* Фильтры: Категория + Валюта */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${activeCategory === cat
                  ? 'bg-zinc-100 text-zinc-900 shadow-lg'
                  : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Currency Filter */}
          <div className="flex gap-1.5 bg-zinc-800 rounded-xl p-1 shrink-0">
            {currencies.map((cur) => (
              <button
                key={cur.key}
                onClick={() => setDisplayCurrency(cur.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-200 ${displayCurrency === cur.key
                  ? 'bg-accent-500 text-zinc-900 shadow-md shadow-accent-500/20'
                  : 'text-zinc-400 hover:text-zinc-200'
                  }`}
              >
                {cur.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sticky Period Selector */}
        <div className="sticky top-16 z-30 bg-zinc-900/95 backdrop-blur-md py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-10 border-b border-zinc-800/50 shadow-xl shadow-black/20">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
            {periods.map((p) => (
              <button
                key={p.key}
                onClick={() => setActivePeriod(p.key)}
                className={`min-h-[40px] px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${activePeriod === p.key
                  ? 'bg-accent-500 text-zinc-900 shadow-md shadow-accent-500/20'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car, idx) => (
            <CarCard key={idx} car={car} activePeriod={activePeriod} displayCurrency={displayCurrency} onBook={setBookingCar} />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20 bg-zinc-800/50 rounded-3xl border border-dashed border-zinc-700">
            <p className="text-zinc-400">Автомобили в данной категории скоро появятся в парке.</p>
          </div>
        )}
      </div>

      <BookingModal car={bookingCar} onClose={() => setBookingCar(null)} onSuccess={() => setShowToast(true)} />
      <SuccessToast isOpen={showToast} onClose={() => setShowToast(false)} />
    </section>
  )
}
