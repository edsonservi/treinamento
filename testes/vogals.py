frase = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe corporis eum nesciunt nihil dolorum distinctio, repellendus accusamus mollitia minima dolore cumque perferendis modi nulla delectus in sapiente omnis a dolor quibusdam expedita? Voluptate minima magni quas quam vitae minus quaerat molestias culpa nemo, similique, ducimus assumenda reiciendis blanditiis? Labore? Nostrum cupiditate rerum ratione molestiae optio, iusto quod consequuntur esse neque eum aperiam pariatur deleniti fugit ex fuga fugiat ullam accusamus temporibus nesciunt id nulla dolorum nam culpa. Qui, architecto maxime quibusdam error dolore veritatis! Velit doloribus laudantium, tempore sed impedit id mollitia iste soluta, incidunt voluptatibus quam, dolor molestias? Sunt corrupti aperiam eligendi a nisi. Dolore beatae, voluptatem aut, facilis in, explicabo eveniet adipisci temporibus ut expedita sint omnis! Laboriosam mollitia ea quaerat in dolorum quisquam amet ipsa, delectus expedita nulla minima, nostrum magni temporibus ratione asperiores veniam deleniti. Cupiditate praesentium nemo dolorum odit perferendis tempore quidem blanditiis sapiente! Beatae a id sit quaerat voluptatum soluta aut ea! Rerum non unde illum corrupti aliquid tempora laudantium. Cumque a ullam magnam non sed tenetur quam! Quam praesentium quo ab debitis rem quos ut doloribus ad nemo. Totam dolores odit maiores quod voluptatem alias quasi minima inventore, a, doloribus ducimus sunt! Incidunt reprehenderit rerum doloremque eveniet vitae, aspernatur possimus veritatis perspiciatis dolor labore aliquam dolorem quod nam hic odit dolorum dolores excepturi voluptatibus officia a quas. Maiores, quas debitis vel deserunt sit, voluptatibus assumenda, temporibus quia aspernatur dolor fuga adipisci incidunt voluptas? Repellat aspernatur sequi iste delectus laborum dolores quo nemo."

selecionado = []

for palavra in frase.split(' '):
    if palavra not in selecionado and len(palavra) > 5:
        selecionado.append(palavra.replace(
            "a", "@").replace("e", "3").replace("i", "!").replace("o", "0").replace("u", "n"))

print(selecionado)
print(len(selecionado))
