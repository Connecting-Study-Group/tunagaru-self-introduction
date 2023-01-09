import { UpdateUser, userRepository } from '@/modules/user.repository';
import { PageTitle } from '@/views/components/PageTitle';
import { Box, FileButton, Button, TextInput, Select, Textarea } from '@mantine/core';
import { useSession } from 'next-auth/react';
import { type FC, useState, FormEvent } from 'react';

export const Form: FC = () => {
  const { data: session, status } = useSession();
  const defaultValue: UpdateUser = {
    name: '',
    email: session?.user?.email ?? '',
    company: '',
    job: '',
    status: '',
    bio: '',
    twitterUrl: '',
    githubUrl: '',
    qiitaUrl: '',
    webUrl: '',
    zennUrl: '',
    instagramUrl: '',
  };
  const [formData, setFormData] = useState<UpdateUser>(defaultValue);
  const [file, setFile] = useState<File | null>(null);

  const updateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('formData', formData);
    const uid = session?.user?.id ?? '';
    const res = await userRepository.updateUser(uid, formData);
    console.log(res);
  };

  if (status === 'loading') return <div>loading...</div>;

  return (
    <Box
      sx={() => ({
        padding: '0 413px',
      })}
    >
      <PageTitle size={'lg'}>自己紹介</PageTitle>
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '40px 90px',
        }}
      >
        <form onSubmit={updateUser}>
          {/**
           * ユーザー画像
           * 初期値はdiscordのアイコン
           */}
          <FileButton onChange={setFile} accept="image/png,image/jpeg">
            {(props) => <Button {...props}>画像をアップロードする</Button>}
          </FileButton>
          {file ? (
            <img src={URL.createObjectURL(file)} alt="user image" />
          ) : (
            // デフォルトの画像
            <img src="https://cdn.discordapp.com/embed/avatars/0.png" alt="user image" />
          )}

          {/**
           * 名前
           * 初期値はdiscordの名前
           */}
          <TextInput
            label="名前"
            withAsterisk
            required
            sx={{
              marginTop: '20px',
            }}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />

          {/** 会社名 */}
          <TextInput
            label="会社名 or 学校名"
            sx={{
              marginTop: '20px',
            }}
            value={formData.company}
            onChange={(e) => {
              setFormData({ ...formData, company: e.target.value });
            }}
          />

          {/** 職業 */}
          <TextInput
            label="職業"
            placeholder="フロントエンドエンジニア"
            sx={{
              marginTop: '20px',
            }}
            value={formData.job}
            onChange={(e) => {
              setFormData({ ...formData, job: e.target.value });
            }}
          />

          {/** 分類 */}
          <Select
            label="分類"
            placeholder="フロントエンドエンジニア"
            data={[
              { label: 'フロントエンドエンジニア', value: 'フロントエンドエンジニア' },
              { label: 'バックエンドエンジニア', value: 'バックエンドエンジニア' },
              { label: 'インフラエンジニア', value: 'インフラエンジニア' },
              { label: 'デザイナー', value: 'デザイナー' },
              { label: 'その他', value: 'その他' },
            ]}
            sx={{
              marginTop: '20px',
            }}
            value={formData.status}
            onChange={(status) => {
              if (status == null) return;
              setFormData({ ...formData, status });
            }}
          />

          {/** SNS */}
          <Box
            // 2列にする
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            <TextInput
              label="Twitter"
              placeholder="Twitter"
              value={formData.twitterUrl}
              onChange={(e) => {
                setFormData({ ...formData, twitterUrl: e.target.value });
              }}
            />
            <TextInput
              label="GitHub"
              placeholder="GitHub"
              value={formData.githubUrl}
              onChange={(e) => {
                setFormData({ ...formData, githubUrl: e.target.value });
              }}
            />
            <TextInput
              label="Instagram"
              placeholder="Instagram"
              value={formData.instagramUrl}
              onChange={(e) => {
                setFormData({ ...formData, instagramUrl: e.target.value });
              }}
            />
            <TextInput
              label="Zenn"
              placeholder="Zenn"
              value={formData.zennUrl}
              onChange={(e) => {
                setFormData({ ...formData, zennUrl: e.target.value });
              }}
            />
            <TextInput
              label="Qiita"
              placeholder="Qiita"
              value={formData.qiitaUrl}
              onChange={(e) => {
                setFormData({ ...formData, qiitaUrl: e.target.value });
              }}
            />
            <TextInput
              label="Web"
              placeholder="Web"
              value={formData.webUrl}
              onChange={(e) => {
                setFormData({ ...formData, webUrl: e.target.value });
              }}
            />
          </Box>

          {/** 説明 */}
          <Textarea
            label="説明"
            placeholder="説明"
            rows={5}
            sx={{
              marginTop: '20px',
            }}
            value={formData.bio}
            onChange={(e) => {
              setFormData({ ...formData, bio: e.target.value });
            }}
          />

          {/** 送信ボタン */}
          <Button
            type="submit"
            sx={{
              display: 'block',
              margin: '0 auto',
              marginTop: '20px',
            }}
          >
            送信
          </Button>
        </form>
      </Box>
      <Button
        type="submit"
        sx={{
          display: 'block',
          margin: '0 auto',
          marginTop: '20px',
        }}
        onClick={() => {
          console.log(formData);
        }}
      >
        送信
      </Button>
    </Box>
  );
};
