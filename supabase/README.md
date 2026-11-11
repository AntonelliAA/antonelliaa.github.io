# Download do currículo com e-mail

O site não guarda os PDFs. O botão "Baixar currículo" chama a função `cv-download`, que fica no projeto Supabase do Caronas (`yjhyxryxnzhsmyizimma`).

A função:

1. só aceita chamadas vindas de `antonelliaa.github.io` e de `localhost:4321`;
2. confere o formato do e-mail, recusa caixas temporárias e consulta o DNS para ver se o domínio recebe e-mail;
3. grava o endereço e o idioma em `public.cv_downloads`, no máximo uma linha por endereço e idioma por dia;
4. devolve um link assinado para o PDF, que vale 2 minutos.

Ela não envia mensagem de confirmação, então não prova que a pessoa é dona do endereço.

## Arquivos

- `cv-downloads.sql`: a tabela (RLS ligada, sem políticas, sem acesso para `anon` e `authenticated`) e o bucket privado `cv`.
- `functions/cv-download/index.ts`: a função.

## Trocar os PDFs

Os arquivos do bucket se chamam `cv-pt.pdf` e `cv-en.pdf`. Para trocar, envie os novos pelo painel do Supabase (Storage, bucket `cv`) com os mesmos nomes. A versão do site não leva telefone.

## Publicar a função de novo

```bash
supabase functions deploy cv-download --project-ref yjhyxryxnzhsmyizimma --no-verify-jwt --use-api
```

## Ver quem baixou

```bash
supabase db query --linked --project-ref yjhyxryxnzhsmyizimma "select email, lang, created_at from public.cv_downloads order by created_at desc"
```
