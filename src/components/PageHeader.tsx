import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type PageHeaderContextValue = {
  title: string;
  setTitle: (t: string) => void;
};

const PageHeaderContext = createContext<PageHeaderContextValue>({
  title: '',
  setTitle: () => {},
});

export function PageHeaderProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState('');
  return (
    <PageHeaderContext.Provider value={{ title, setTitle }}>
      {children}
    </PageHeaderContext.Provider>
  );
}

export function PageHeader() {
  const { title } = useContext(PageHeaderContext);
  return (
    <header className="pt-2 pb-6 text-center">
      <h1 className="text-xl font-medium leading-tight">{title}</h1>
    </header>
  );
}

export function useSetPageTitle(title: string) {
  const { setTitle } = useContext(PageHeaderContext);
  useEffect(() => {
    setTitle(title);
  }, [title, setTitle]);
}
