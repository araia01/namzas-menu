import Image from "next/image";

const PriceBox = ({
  label,
  price,
}: {
  label: string;
  price: string;
}) => (
  <div className="rounded-2xl bg-black/[0.045] px-3 py-4">
    <p className="text-[10px] font-black uppercase tracking-wider text-black/45">
      {label}
    </p>
    <p className="mt-1 text-[20px] font-black text-[#F58220]">{price}</p>
  </div>
);

const SimpleItem = ({
  name,
  price,
  description,
}: {
  name: string;
  price: string;
  description?: string;
}) => (
  <div className="border-t border-black/15 py-5">
    <div className="flex items-start justify-between gap-5">
      <div className="min-w-0">
        <h4 className="text-[17px] font-black uppercase leading-tight">{name}</h4>

        {description && (
          <p className="mt-2 max-w-xl text-[13px] font-medium leading-[1.55] text-black/55">
            {description}
          </p>
        )}
      </div>

      <p className="shrink-0 text-[18px] font-black text-[#F58220]">{price}</p>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F1E3] text-[#111111]">
      {/* HERO */}
      <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 pb-24 text-center sm:pb-16">
        <Image
          src="/namzas-logo.png"
          alt="Namza's logo"
          width={160}
          height={100}
          priority
          className="mb-5 h-auto w-[145px] sm:w-[155px]"
        />

        <h1 className="text-[54px] font-black leading-none tracking-[-0.045em] sm:text-6xl md:text-8xl">
          NAMZA&apos;S
        </h1>

        <h2 className="mt-7 text-[34px] font-black uppercase leading-[0.88] tracking-[-0.035em] sm:text-5xl md:text-7xl">
          Smashed Fresh.
          <br />
          Served Hot.
        </h2>

        <p className="mt-7 max-w-[290px] text-[15px] font-medium leading-6 text-black/55 sm:max-w-md sm:text-lg">
          Smash burgers, wings, tacos and more.
        </p>

        <a
          href="#menu"
          className="mt-9 inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#F58220] px-9 text-sm font-black uppercase tracking-[0.04em] text-black transition duration-200 hover:scale-105 hover:bg-[#ff8b26]"
        >
          View Menu
        </a>
      </section>

      {/* MENU */}
      <section id="menu" className="pb-24">
        {/* MENU HEADER */}
        <div className="px-5 pt-16 sm:px-6 sm:pt-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F58220]">
              Pick your favorite
            </p>

            <h2 className="mt-2 text-[46px] font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">
              The Menu
            </h2>
          </div>
        </div>
        {/* CATEGORY NAVIGATION */}
        <div className="sticky top-0 z-50 mt-8 border-y border-black/10 bg-[#F7F1E3]/95 py-3 backdrop-blur-md">
          <div className="w-full overflow-x-scroll overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2 px-5 sm:px-6">
              <a
                href="#burgers"
                className="whitespace-nowrap rounded-full bg-[#111111] px-5 py-3 text-xs font-black uppercase tracking-wide text-white"
              >
                Burgers
              </a>

              <a
                href="#tacos"
                className="whitespace-nowrap rounded-full border border-black/15 px-5 py-3 text-xs font-black uppercase tracking-wide"
              >
                Tacos
              </a>

              <a
                href="#wings"
                className="whitespace-nowrap rounded-full border border-black/15 px-5 py-3 text-xs font-black uppercase tracking-wide"
              >
                Wings
              </a>

              <a
                href="#combos"
                className="whitespace-nowrap rounded-full border border-black/15 px-5 py-3 text-xs font-black uppercase tracking-wide"
              >
                Combos
              </a>

              <a
                href="#fries"
                className="whitespace-nowrap rounded-full border border-black/15 px-5 py-3 text-xs font-black uppercase tracking-wide"
              >
                Fries
              </a>

              <a
                href="#rice"
                className="whitespace-nowrap rounded-full border border-black/15 px-5 py-3 text-xs font-black uppercase tracking-wide"
              >
                Fried Rice
              </a>

              <a
                href="#drinks"
                className="whitespace-nowrap rounded-full border border-black/15 px-5 py-3 text-xs font-black uppercase tracking-wide"
              >
                Drinks
              </a>
            </div>
          </div>
        </div>

        {/* ==================== BURGERS ==================== */}
        <div
          id="burgers"
          className="mx-auto mt-14 max-w-6xl scroll-mt-20 px-5 sm:px-6"
        >
          <div className="mb-9">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F58220]">
              Namza&apos;s Classics
            </p>

            <h3 className="mt-2 text-[35px] font-black uppercase leading-none tracking-[-0.035em]">
              Smash Burgers
            </h3>
          </div>

          {/* BEEF */}
          <article className="border-t border-black/15 py-7">
            <div className="flex items-start justify-between gap-5">
              <div>
                <h4 className="text-[24px] font-black uppercase leading-none">
                  Beef
                </h4>

                <p className="mt-3 max-w-xl text-[14px] font-medium leading-[1.55] text-black/55">
                  Namza&apos;s classic beef smashburger with cheese, burger
                  sauce, pickles, brown onions and slaw.
                </p>
              </div>

              <span className="mt-1 shrink-0 rounded-full bg-[#F58220] px-3 py-1 text-[10px] font-black uppercase">
                Classic
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              <PriceBox label="Single" price="Le100" />
              <PriceBox label="Double" price="Le160" />
              <PriceBox label="Triple" price="Le200" />
            </div>
          </article>

          {/* CHICKEN */}
          <article className="border-t border-black/15 py-7">
            <h4 className="text-[24px] font-black uppercase leading-none">
              Chicken
            </h4>

            <p className="mt-3 max-w-xl text-[14px] font-medium leading-[1.55] text-black/55">
              Namza&apos;s classic chicken smashburger with cheese, burger
              sauce, pickles, brown onions and slaw.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              <PriceBox label="Single" price="Le100" />
              <PriceBox label="Double" price="Le160" />
              <PriceBox label="Triple" price="Le200" />
            </div>
          </article>

          {/* SALONE SPICY */}
          <article className="border-y border-black/15 py-7">
            <div className="flex items-center gap-2">
              <h4 className="text-[24px] font-black uppercase leading-none">
                Salone Spicy
              </h4>
              <span className="text-lg">🌶️</span>
            </div>

            <p className="mt-3 max-w-xl text-[14px] font-medium leading-[1.55] text-black/55">
              Namza&apos;s classic beef smashburger with cheese, toum, pickles,
              hot pepper, brown onions, slaw, BBQ sauce, garlic mayo and spicy
              mayo.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              <PriceBox label="Single" price="Le110" />
              <PriceBox label="Double" price="Le170" />
              <PriceBox label="Triple" price="Le210" />
            </div>
          </article>
        </div>

        {/* ==================== TACOS ==================== */}
        <div
          id="tacos"
          className="mx-auto mt-20 max-w-6xl scroll-mt-20 px-5 sm:px-6"
        >
          <div className="mb-7">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F58220]">
              Classic or Spicy 🌶️
            </p>

            <h3 className="mt-2 text-[35px] font-black uppercase leading-none tracking-[-0.035em]">
              Smash Tacos
            </h3>
          </div>

          <p className="mb-3 max-w-xl text-[14px] font-medium leading-[1.6] text-black/55">
            2 smash tacos served with mozzarella cheese, onions, tomato,
            guacamole, BBQ sauce and Namza&apos;s special sauce.
          </p>

          <SimpleItem name="Beef" price="Le200" />
          <SimpleItem name="Chicken" price="Le200" />
        </div>

        {/* ==================== WINGS ==================== */}
        <div
          id="wings"
          className="mx-auto mt-20 max-w-6xl scroll-mt-20 px-5 sm:px-6"
        >
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F58220]">
              Pick Your Style
            </p>

            <h3 className="mt-2 text-[35px] font-black uppercase leading-none tracking-[-0.035em]">
              Wings
            </h3>
          </div>

          {/* GRILLED */}
          <article className="border-t border-black/15 py-7">
            <h4 className="text-[22px] font-black uppercase">Grilled</h4>

            <p className="mt-2 text-[13px] font-medium text-black/50">
              Flavors: Spicy BBQ or Peri-Peri
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <PriceBox label="6 Wings" price="Le90" />
              <PriceBox label="12 Wings" price="Le180" />
              <PriceBox label="24 Wings" price="Le330" />
            </div>
          </article>

          {/* CRISPY */}
          <article className="border-t border-black/15 py-7">
            <h4 className="text-[22px] font-black uppercase">Crispy</h4>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <PriceBox label="6 Wings" price="Le90" />
              <PriceBox label="12 Wings" price="Le180" />
              <PriceBox label="24 Wings" price="Le330" />
            </div>
          </article>

          {/* BUFFALO */}
          <article className="border-y border-black/15 py-7">
            <div className="flex items-center gap-2">
              <h4 className="text-[22px] font-black uppercase">
                Buffalo Wings
              </h4>

              <span className="rounded-full bg-[#F58220] px-2.5 py-1 text-[9px] font-black uppercase">
                New
              </span>
            </div>

            <p className="mt-2 text-[13px] font-medium text-black/50">
              Honey Garlic BBQ — Normal or Spicy 🌶️
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <PriceBox label="6 Wings" price="Le110" />
              <PriceBox label="12 Wings" price="Le220" />
              <PriceBox label="24 Wings" price="Le440" />
            </div>
          </article>
        </div>

        {/* ==================== COMBOS ==================== */}
        <div
          id="combos"
          className="mx-auto mt-20 max-w-6xl scroll-mt-20 px-5 sm:px-6"
        >
          <div className="mb-7">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F58220]">
              Bigger Hunger
            </p>

            <h3 className="mt-2 text-[35px] font-black uppercase leading-none tracking-[-0.035em]">
              Namza&apos;s Combos
            </h3>
          </div>

          <SimpleItem
            name="Peri-Peri Grilled Chicken Leg"
            price="Le160"
            description="Namza's chicken leg marinated in our in-house peri-peri sauce, grilled to perfection and served with chips."
          />

          <SimpleItem
            name="Platter For 1"
            price="Le200"
            description="1 smashburger, 3 grilled winglets and fries."
          />

          <SimpleItem
            name="Platter For 2"
            price="Le320"
            description="2 smashburgers, 6 grilled winglets and fries."
          />

          <SimpleItem
            name="Taco Platter"
            price="Le630"
            description="4 chicken or beef tacos, 12 grilled wings and 2 plain fries."
          />

          <SimpleItem
            name="Family Platter"
            price="Le750"
            description="4 smashburgers, 6 grilled wings, 6 crispy wings and 2 loaded cheesy fries with chicken."
          />

          <SimpleItem
            name="Friends Platter"
            price="Le790"
            description="24 grilled wings, 4 smashburgers and 2 plain fries."
          />
        </div>

        {/* ==================== FRIES ==================== */}
        <div
          id="fries"
          className="mx-auto mt-20 max-w-6xl scroll-mt-20 px-5 sm:px-6"
        >
          <div className="mb-7">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F58220]">
              On The Side
            </p>

            <h3 className="mt-2 text-[35px] font-black uppercase leading-none tracking-[-0.035em]">
              Fries
            </h3>
          </div>

          <SimpleItem name="Plain Fries" price="Le60" />
          <SimpleItem name="Cheesy Fries" price="Le70" />
          <SimpleItem
            name="Loaded Cheesy Fries with Brown Onions"
            price="Le80"
          />
          <SimpleItem
            name="Loaded Cheesy Fries with BBQ Sausage"
            price="Le90"
          />
          <SimpleItem
            name="Loaded Cheesy Fries with Shredded Chicken"
            price="Le110"
          />
          <SimpleItem name="Loaded Cheesy Fries with Beef" price="Le120" />
        </div>

        {/* ==================== FRIED RICE ==================== */}
        <div
          id="rice"
          className="mx-auto mt-20 max-w-6xl scroll-mt-20 px-5 sm:px-6"
        >
          <div className="mb-7">
            <div className="flex items-center gap-3">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F58220]">
                Something Different
              </p>

              <span className="rounded-full bg-[#F58220] px-2.5 py-1 text-[9px] font-black uppercase">
                New
              </span>
            </div>

            <h3 className="mt-2 text-[35px] font-black uppercase leading-none tracking-[-0.035em]">
              Fried Rice
            </h3>
          </div>

          <SimpleItem name="Fried Rice" price="Le70" />
          <SimpleItem name="Fried Rice with 3 Grilled Wings" price="Le115" />
          <SimpleItem name="Fried Rice with 6 Grilled Wings" price="Le160" />
          <SimpleItem name="Fried Rice with 12 Grilled Wings" price="Le250" />
          <SimpleItem name="Fried Rice with BBQ Sausage" price="Le90" />
          <SimpleItem
            name="Fried Rice with Shredded Chicken"
            price="Le110"
          />
          <SimpleItem name="Fried Rice with Beef" price="Le120" />
        </div>

        {/* ==================== BEVERAGES ==================== */}
        <div
          id="drinks"
          className="mx-auto mt-20 max-w-6xl scroll-mt-20 px-5 sm:px-6"
        >
          <div className="mb-7">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F58220]">
              Stay Refreshed
            </p>

            <h3 className="mt-2 text-[35px] font-black uppercase leading-none tracking-[-0.035em]">
              Beverages
            </h3>
          </div>

          <SimpleItem name="Sprite" price="Le40" />
          <SimpleItem name="Coke" price="Le40" />
          <SimpleItem name="Fanta" price="Le40" />
          <SimpleItem name="Xtra Juice" price="Le40" />
          <SimpleItem name="Maltina" price="Le40" />
          <SimpleItem name="Water" price="Le10" />
        </div>

        {/* END */}
        <div className="mx-auto mt-24 max-w-6xl px-5 text-center sm:px-6">
          <Image
            src="/namzas-logo.png"
            alt=""
            width={90}
            height={60}
            className="mx-auto h-auto w-[80px]"
          />

          <p className="mt-5 text-[22px] font-black uppercase leading-tight">
            Smashed Fresh.
            <br />
            Served Hot.
          </p>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-black/35">
            Namza&apos;s Smash Burgers
          </p>

          <a
            href="#menu"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/15 px-6 text-xs font-black uppercase tracking-wider transition duration-200 hover:border-black hover:bg-black hover:text-white"
          >
            ↑ Back to Menu
          </a>
        </div>
      </section>
    </main>
  );
}