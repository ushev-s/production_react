import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Enter username')}
        autofocus
      />
      <Input className={cls.input} type="text" placeholder={t('Enter password')} />
      <Button className={cls.loginBtn}>{t('Login')}</Button>
    </div>
  );
};
