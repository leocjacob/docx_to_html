
import os.path
import shutil
from shutil import copyfile
from docx2html import convert
print '******************************************************'
print '-copy docx file to docx folder(not doc its docx mind it !)'
print '-docx will be converted to html file in html folder :)'
print '-last update 07-01-2016'
print '******************************************************'
docx_filename=raw_input('Enter docx file name:')

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
docx_filename_path= 'docx/%s.docx'%docx_filename
if os.path.isfile(docx_filename_path):
    html = convert(docx_filename_path, image_handler=handle_image)
    html=html.replace('<html>','').replace('</html>','').replace('<p>Group type</p>','')
    html=html.replace('<p>','<h3>',1).replace('</p>','</h3>',1).replace('&#160;','&nbsp;')
    html=html.replace('<ol','<ul').replace('</ol>','</ul>').replace('data-list-type="decimal"','class="number-list"')
    html=html.replace('&#8220;','&ldquo;').replace('<table>','<table border="0" cellpadding="0">')
    html=html.replace('<img','<img class="img-responsive"').replace('height="157" width="624" />','/>')
    fo = open("html/%s.html"%docx_filename, "wb")
    fo.write(html)
    fo.close()
    shutil.rmtree('docx/word')
    print '........................Task completed successfully:)'
    print 'Output path :html/%s.html'%docx_filename

else:
    print 'ERROR: File not found in path %s'%docx_filename_path
    print 'Make sure file extension is .docx'
