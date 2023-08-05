import sys
import shutil
import zipfile
from pathlib import Path
from super_sweetest.autotest import Autotest
from super_sweetest.report import reporter


def extract(zfile, path):
    f = zipfile.ZipFile(zfile, 'r')
    for file in f.namelist():
        f.extract(file, path)


def sweetest():
    sweetest_dir = Path(__file__).resolve().parents[0]
    example_dir = sweetest_dir / 'example' / 'sweetest_example.zip'
    extract(str(example_dir), Path.cwd())

    print('\n文档: https://sweeter.io\n公众号：喜文测试\nQ Q 群：941761748 (验证码：python)注意首字母小写')
    print('\n\n生成 super_sweetest example 成功\n快速体验，请输入如下命令(进入示例目录，启动运行脚本):\n\ncd sweetest_example\npython start.py')


def report():
    sweetest_dir = Path(__file__).resolve().parents[0]
    report_dir = sweetest_dir / 'example' / 'report.zip'
    extract(str(report_dir), Path.cwd())