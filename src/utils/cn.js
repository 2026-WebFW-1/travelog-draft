import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 조건에 따라 Tailwind 클래스를 합쳐요.
 * 뒤에 오는 클래스가 앞의 같은 종류 클래스를 덮어써요 (`p-2`, `p-4` → `p-4`).
 * 그래서 부모가 넘긴 className으로 컴포넌트 기본 스타일을 바꿀 수 있어요.
 * @param {...(string | false | null | undefined | Record<string, boolean>)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
