import { ShoppingCartSimpleIcon, UserIcon } from "@phosphor-icons/react/ssr"
import Link from "next/link"

export function Header() {
  const cartQuantity = 1;

  return (
    <header className="w-full h-[10vh] px-4 md:px-12 flex justify-between items-center shadow-md relative">
      <Link href="/">
        <h1 className="text-black text-[1.2rem] md:text-[2.2rem] lg:text-[3rem]">AnimalPet</h1>
      </Link>

      <nav className="flex gap-4 md:gap-8 lg:gap-12">
        <Link href="/home">
          <p className="text-black text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] pb-6 border-b-2 border-transparent hover:border-green-primary transition">Início</p>
        </Link>
        <Link href="/about">
          <p className="text-black text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] pb-6 border-b-2 border-transparent hover:border-green-primary transition">Sobre</p>
        </Link>
        <Link href="/products">
          <p className="text-black text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] pb-6 border-b-2 border-transparent hover:border-green-primary transition">Produtos</p>
        </Link>
        <Link href="/services">
          <p className="text-black text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] pb-6 border-b-2 border-transparent hover:border-green-primary transition">Serviços</p>
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center gap-3 px-2 py-2 md:px-4 rounded bg-green-100 text-green-primary cursor-pointer group">
          <UserIcon size={24} className="text-green-primary md:w-8 md:h-8" />
          <p className="text-[1.2rem] md:text-[1.6rem] lg:text-[1.8rem]">Entrar</p>

          <span className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-[9rem] right-12 bg-white rounded-lg shadow-md text-gray-800 text-base px-6 py-4 w-max transition duration-100 z-10">
            <div className="relative">
              <div className="absolute top-[-18px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[18px] border-b-white"></div>
              <Link href="/login">
                <button className="w-full bg-green-primary text-white px-4 py-3 rounded mb-4 hover:bg-transparent hover:border hover:border-green-primary hover:text-green-primary transition">
                  Entrar
                </button>
              </Link>
              <p className="text-sm">
                Não tem cadastro? <Link href="/register" className="text-green-primary underline">Criar conta</Link>
              </p>
            </div>
          </span>
        </div>

        <div className="relative flex items-center justify-center px-2 py-2 bg-transparent">
          {cartQuantity >= 1 && (
            <span className="absolute w-[1.45rem] h-[1.45rem] md:w-[1.85rem] md:h-[1.85rem] rounded-full top-[-0.725rem] right-[-0.725rem] bg-green-primary text-white flex items-center justify-center text-[0.85rem] md:text-[1.2rem] font-bold">
              {cartQuantity}
            </span>
          )}
          <Link href="/complete-order">
            <ShoppingCartSimpleIcon size={32} weight="bold" className="text-green-primary" />
          </Link>
        </div>
      </div>
    </header>
  )
}