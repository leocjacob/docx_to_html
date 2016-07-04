'''
Code written and maintained by https://github.com/makerspaze
Author : leoCj
'''
import os.path
import shutil
import glob
from shutil import copyfile
from docx2html import convert
import sys
def printProgress (iteration, total, prefix = '', suffix = '', decimals = 2, barLength = 100):
    filledLength    = int(round(barLength * iteration / float(total)))
    percents        = round(100.00 * (iteration / float(total)), decimals)
    bar             = '#' * filledLength + '-' * (barLength - filledLength)
    sys.stdout.write('%s [%s] %s%s %s\r' % (prefix, bar, percents, '%', suffix)),
    sys.stdout.flush()
    if iteration == total:
        print("\n")
def progressbar(pre,suf):
    i     = 0
    l     = 10000
    # Initial call to print 0% progress
    printProgress(i, l, prefix = pre, suffix = suf, barLength = 50)
    for item in range(10000):
        # Do stuff...
        # Update Progress Bar
        i += 1
        printProgress(i, l, prefix = 'Setup:', suffix = 'Complete', barLength = 50)
def conv_core(docx_filename_path,docx_filename,op_mode):
    if os.path.isfile(docx_filename_path):
        def handle_image(image_id, relationship_dict):
            image_path = relationship_dict[image_id]
            # Now do something to the image. Let's move it somewhere.
            _, filename = os.path.split(image_path)
            #extension = os.path.splitext(filename)[1]
            #new_filename= os.path.splitext(filename)[0]
            filename=filename.replace('image','%s_'%docx_filename)
            destination_path = os.path.join('html/images/screenshots/',filename)
            copyfile(image_path, destination_path)

            # Return the `src` attribute to be used in the img tag
            return 'images/screenshots/%s'%filename
        html = convert(docx_filename_path, image_handler=handle_image)
        html=html.replace('<html>','').replace('</html>','').replace('<p>Group type</p>','')
        html=html.replace('<p>','<h3>',1).replace('</p>','</h3>',1).replace('&#160;','&nbsp;')
        html=html.replace('<ol','<ul').replace('</ol>','</ul>').replace('data-list-type="decimal"','class="number-list"')
        html=html.replace('&#8220;','&ldquo;').replace('<table>','<table border="0" cellpadding="0">')
        html=html.replace('<img','<img class="img-responsive"').replace('height="157" width="624" />','/>')
        with open('template.html', 'r') as myfile:
            data=myfile.read().replace('<!--conv_active_link-->', '<li class="active-topic"><span><a href="%(1)s.html">%(2)s</a></span></li>'%{"1" : docx_filename, "2" : docx_filename}).replace('<!--conv_content-->',html)
        fo = open("html/%s.html"%docx_filename, "wb")
        fo.write(data)
        fo.close()
        shutil.rmtree('docx/word')
        print '******************************************************'
        progressbar('Converting:','Complete')
        print '******************************************************'
        print 'TASK COMPLETED SUCCESSFULLY :)'
        print '-Output path :html/%s.html'%docx_filename
        if op_mode:
            raw_input()
    else:
        print '******************************************************'
        print 'ERROR:'
        print '-File not found in path %s'%docx_filename_path
        print '-Also make sure that the file extension is ".docx"'
        convert_engine()
def convert_engine():
    print '******************************************************'
    print 'INSTRUCTIONS:'
    print '-Copy docx file to docx folder.'
    print '-Html files can be found in html folder'
    print '-Last update 07-01-2016'
    print '******************************************************'
    docx_filename=raw_input('Enter docx file name:')
    if docx_filename=='*':
        if glob.glob("docx/*.docx"):
            op_mode=0
            docx_files= glob.glob("docx/*.docx")
            cnt=0
            for docx in docx_files:
                docx=docx.replace('\\','/')
                docx_filename=docx.replace('docx/','').replace('.docx','')
                conv_core(docx,docx_filename,op_mode)
                cnt+=1
                if cnt==len(docx_files)-1:
                 op_mode=1
        else:
            print '******************************************************'
            print 'ERROR:'
            print '-Docx folder empty.'
            print '-Also make sure that the file extension is ".docx"'
            convert_engine()
    else:
        op_mode=1
        conv_core('docx/%s.docx'%docx_filename,docx_filename,op_mode)
if (os.path.isdir("html/images/screenshots") and os.path.isdir("docx")):
        convert_engine()
else:
        if not os.path.isdir('html/images/screenshots/'):
            os.makedirs('html/images/screenshots/')
        if not os.path.isdir("docx"):
            os.makedirs('docx')
        progressbar('Setup:','Complete')
        print 'DOCX TO HTML CONVERSION TOOL IS INSTALLED SUCCESSFULLY :)'
        convert_engine()
