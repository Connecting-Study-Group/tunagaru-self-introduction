import { UpdateUser } from '@/modules/user.repository';
import { PageTitle } from '@/views/components/PageTitle';
import { Box, FileButton, Button, TextInput, Select, Textarea } from '@mantine/core';
import { type FC, useState } from 'react';

export const Form: FC = () => {
  const defaultValue: UpdateUser = {
    name: '',
    company: '',
    job: '',
    status: '',
    bio: '',
  };
  const [formData, setFormData] = useState<UpdateUser>(defaultValue);

  const [file, setFile] = useState<File | null>(null);

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
        <form onSubmit={() => console.log('submit')}>
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
          />

          {/** 会社名 */}
          <TextInput
            label="会社名 or 学校名"
            sx={{
              marginTop: '20px',
            }}
          />

          {/** 職業 */}
          <TextInput
            label="職業"
            placeholder="フロントエンドエンジニア"
            sx={{
              marginTop: '20px',
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
            <TextInput label="Twitter" placeholder="Twitter" />
            <TextInput label="GitHub" placeholder="GitHub" />
            <TextInput label="Instagram" placeholder="Instagram" />
            <TextInput label="Zenn" placeholder="Zenn" />
            <TextInput label="Qiita" placeholder="Qiita" />
            <TextInput label="Web" placeholder="Web" />
          </Box>

          {/** 説明 */}
          <Textarea
            label="説明"
            placeholder="説明"
            rows={5}
            sx={{
              marginTop: '20px',
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
    </Box>
  );
};
