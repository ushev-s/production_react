import { loginActions } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Login Form')} />
      {error && (
        <Text text={t('Incorrect username or password')} theme={TextTheme.ERROR} />
      )}
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Enter username')}
        autofocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Enter password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
});
