import { useState } from 'react';
import { SITE } from '@/lib/utils';

const MAX_FILE_MB = 5;
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
function FileIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

type Status = 'idle' | 'loading' | 'ok' | 'err';

export function Carreiras() {
  const [status, setStatus] = useState<Status>('idle');
  const [msg, setMsg] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');

  function onPickFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    setFileError('');
    if (!f) {
      setFile(null);
      return;
    }
    if (f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name)) {
      setFileError('Envie um arquivo PDF.');
      setFile(null);
      return;
    }
    if (f.size > MAX_FILE_BYTES) {
      setFileError(`O PDF não pode passar de ${MAX_FILE_MB}MB.`);
      setFile(null);
      return;
    }
    setFile(f);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!file) {
      setFileError('Anexe o seu currículo em PDF.');
      return;
    }
    setStatus('loading');
    setMsg('');
    try {
      const fd = new FormData(e.currentTarget);
      // Garantir que o arquivo selecionado vai como "cv"
      fd.set('cv', file, file.name);
      const r = await fetch('/api/jobs', { method: 'POST', body: fd });
      if (!r.ok) throw new Error('falha');
      setStatus('ok');
      setMsg('Currículo enviado! O nosso RH retornará caso seu perfil seja compatível.');
      (e.currentTarget as HTMLFormElement).reset();
      setFile(null);
    } catch {
      setStatus('err');
      setMsg('Não conseguimos enviar agora. Tente novamente em instantes ou escreva para ' + SITE.rhEmail + '.');
    }
  }

  return (
    <section id="carreiras" className="relative bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1f9555]">
              Carreiras
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Trabalhe{' '}
              <span className="text-[#28b76b]">conosco</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">
              Queremos pessoas com propósito, técnica e responsabilidade — gente
              que acredita que a indústria pode ser parte da solução.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              Envie seu currículo no formulário ao lado. Vamos analisar e
              entraremos em contato caso seu perfil esteja alinhado às nossas
              vagas, presentes ou futuras.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Ambiente industrial com propósito ESG',
                'Time enxuto, com voz e responsabilidade',
                'Aprendizado contínuo em reciclagem mecânica',
              ].map((it) => (
                <li key={it} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#28b76b] text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {it}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-white p-5 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground/55">
                Recursos Humanos
              </div>
              <a
                href={`mailto:${SITE.rhEmail}`}
                className="mt-1 block font-display text-lg font-bold text-primary hover:text-[#28b76b]"
              >
                {SITE.rhEmail}
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8 lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground/80">Nome completo</span>
                <input
                  required
                  name="name"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none ring-[#28b76b]/30 transition-all focus:border-[#28b76b] focus:bg-white focus:ring-4"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground/80">Cargo desejado</span>
                <input
                  required
                  name="position"
                  placeholder="Ex.: Operador de extrusão"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none ring-[#28b76b]/30 transition-all focus:border-[#28b76b] focus:bg-white focus:ring-4"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground/80">E-mail</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none ring-[#28b76b]/30 transition-all focus:border-[#28b76b] focus:bg-white focus:ring-4"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground/80">Telefone</span>
                <input
                  name="phone"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none ring-[#28b76b]/30 transition-all focus:border-[#28b76b] focus:bg-white focus:ring-4"
                />
              </label>
              <label className="text-sm sm:col-span-2">
                <span className="mb-1.5 block font-semibold text-foreground/80">Cidade / UF</span>
                <input
                  name="city"
                  placeholder="Ex.: Curitiba/PR"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none ring-[#28b76b]/30 transition-all focus:border-[#28b76b] focus:bg-white focus:ring-4"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block font-semibold text-foreground/80">
                Mensagem <span className="font-normal text-foreground/50">(opcional)</span>
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Conte um pouco sobre você, sua experiência e o que te motiva."
                className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 outline-none ring-[#28b76b]/30 transition-all focus:border-[#28b76b] focus:bg-white focus:ring-4"
              />
            </label>

            <div className="mt-4">
              <span className="mb-1.5 block text-sm font-semibold text-foreground/80">
                Currículo (PDF, até {MAX_FILE_MB}MB)
              </span>
              <label
                className={
                  'group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed bg-surface px-5 py-8 text-center transition-all ' +
                  (file
                    ? 'border-[#28b76b] bg-accent-light/40'
                    : fileError
                      ? 'border-red-300 bg-red-50/60'
                      : 'border-border hover:border-[#28b76b]/50 hover:bg-accent-light/30')
                }
              >
                <input
                  type="file"
                  name="cv"
                  accept="application/pdf,.pdf"
                  onChange={onPickFile}
                  className="sr-only"
                />
                {file ? (
                  <>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#28b76b] text-white">
                      <FileIcon className="h-5 w-5" />
                    </span>
                    <div className="font-semibold text-primary">{file.name}</div>
                    <div className="text-xs text-foreground/60">
                      {(file.size / 1024 / 1024).toFixed(2)} MB · clique para trocar
                    </div>
                  </>
                ) : (
                  <>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light text-[#28b76b]">
                      <UploadIcon className="h-5 w-5" />
                    </span>
                    <div className="font-semibold text-primary">
                      Clique para anexar o seu currículo
                    </div>
                    <div className="text-xs text-foreground/60">
                      Apenas PDF · máx. {MAX_FILE_MB}MB
                    </div>
                  </>
                )}
              </label>
              {fileError && (
                <p className="mt-2 text-sm text-red-600">{fileError}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#28b76b] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-[#1f9555] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === 'loading' ? 'Enviando…' : 'Enviar candidatura'}
            </button>

            {msg && (
              <p
                className={
                  'mt-4 text-sm ' +
                  (status === 'ok' ? 'text-[#1f9555]' : status === 'err' ? 'text-red-600' : 'text-foreground/70')
                }
              >
                {msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
