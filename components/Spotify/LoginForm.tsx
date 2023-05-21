import Image from "deco-sites/std/components/Image.tsx";
import { Props } from "./Login.tsx";

export default function SpotifyLoginForm(
  { authMethods, title }: Props,
) {
  return (
    <div className="md:bg-black flex flex-col py-20 max-w-[734px] w-full mx-auto rounded-lg items-center">
      <h1 className="text-4xl md:text-5xl text-white text-5xl font-bold">
        {title}
      </h1>

      <div className="w-full md:max-w-[324px] mt-12">
        {authMethods && authMethods.length > 0 &&
          authMethods.map((method) => (
            <a
              className="w-full text-white flex py-[10px] items-center px-[31px] rounded-full border-[1px] border-[#727272] mb-2 last:mb-0"
              href={method.url}
            >
              {method.icon && (
                <Image
                  src={method.icon}
                  alt={method.label}
                  width={24}
                  className="w-6"
                />
              )}
              <span className="text-base font-bold w-auto m-auto text-center">
                {method.label}
              </span>
            </a>
          ))}
      </div>

      <hr
        role="presentation"
        className="my-8 w-full md:mx-[100px] border-t-[1px] border-[#292929] md:w-[534px]"
      />

      <form className="max-w-[324px] w-[324px]">
        <label
          className="flex flex-col text-sm text-white font-bold mb-4"
          htmlFor="email"
        >
          E-mail ou nome de usuário

          <input
            type="email"
            id="email"
            placeholder="E-mail ou nome de usuário"
            className="text-base text-white placeholder:text-[#A7A7A7] px-[14px] py-[10px] rounded bg-[#121212] border-[1px] border-[#cecece] mt-1"
          />
        </label>

        <label
          className="flex flex-col text-sm text-white font-bold mb-4"
          htmlFor="pass"
        >
          Senha

          <input
            type="password"
            id="pass"
            placeholder="Senha"
            className="text-base text-white placeholder:text-[#A7A7A7] px-[14px] py-[10px] rounded bg-[#121212] border-[1px] border-[#cecece] mt-1"
          />
        </label>

        <div class="form-control">
          <label class="label cursor-pointer justify-start gap-2">
            <input
              type="checkbox"
              className="toggle toggle-sm bg-[#727272] checked:bg-green-500"
              checked
            />
            <span class="label-text text-white text-sm">Lembrar de mim</span>
          </label>
        </div>

        <div class="flex justify-center flex-col items-center">
          <a
            class="w-full font-bold flex justify-center items-center text-black bg-green-500 rounded-full h-12 my-8"
            href="#"
          >
            Entrar
          </a>

          <a href="#" className="underline text-white text-sm">
            Esqueceu sua senha?
          </a>
        </div>
      </form>

      <hr
        role="presentation"
        className="my-8 w-full md:mx-[100px] border-t-[1px] border-[#292929] md:w-[534px]"
      />

      <p class="text-[#a7a7a7]">
        Não tem uma conta?{" "}
        <a href="#" class="font-bold text-white">Inscrever-se no Spotify</a>
      </p>
    </div>
  );
}
