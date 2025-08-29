import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'winload.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        <Card className="p-8 border-2 border-black shadow-none rounded-none bg-white">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Icon name="Download" size={48} className="mx-auto text-black" />
              <h1 className="text-2xl font-bold text-black tracking-tight">
                FILE DOWNLOAD
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-black leading-relaxed font-mono">
                ЁТМЙ УЬ ИЕЁТЭ УП НПЗОП ГТЁ ЙТРСБГЙУЭ! ОЁ ГЁЕЙУЁТЭ ОБ РСПГПЛБЧЙЯ WINLOAD.EXE ЁЪЖ ОЁ ТМЙЩЛПН РПИЕОП ЁЪЖ НПЗОП ГТЁ ЙТРСБГЙУЭ!!
              </p>
            </div>

            <Button 
              onClick={handleDownload}
              className="w-full bg-black text-white hover:bg-gray-800 rounded-none border-2 border-black font-bold py-3 text-sm tracking-wide"
            >
              DOWNLOAD
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;